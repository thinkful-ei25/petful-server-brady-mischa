'use strict';
const express = require('express');
const router = express.Router();
// const dogs = require('../queues/dogs');
// const cats = require('../queues/cats');
const knex = require('../knex');

/* ================ GET ================ */

function checkPetType(req, res, next) {
  let petType = req.params.pets;
  if (petType !== 'dogs' && petType !== 'cats') {
    const err = new Error;
    err.status = 404;
    err.message = ('Sorry, cats and dogs only! Check back soon for more animals!');
    next(err);
  } else {
    req.petType = req.params.pets;
    next();
  }
}

function selectOnePetFromDb(req, res, next) {
  knex(req.petType).select().limit(1)
    .then(([pet]) => {
      if (pet) {
        req.pet = pet;
      } else {
        req.pet = undefined;
      }
      next();
    })
    .catch(err => next(err));
}
router.get('/pets/:pets', checkPetType, selectOnePetFromDb, (req, res) => {
  if (req.pet) {
    res.json(req.pet);
  } else {
    res.sendStatus(200);
  }
});

router.post('/pets/:pets', checkPetType, (req, res, next) => {
  //verify body has name attributes
  const petAttrs = ['name', 'age', 'sex', 'breed', 'story', 'imageUrl', 'imageDescription'];
  if(!req.body.name) {
    const err = new Error('Missing name');
    err.status = 422;
    next(err);
    return;
  }
  //verify if age age is a number
  if(isNaN(req.body.age)){
    const err = new Error('Age must be a number');
    err.status = 400;
    next(err);
    return;
  }
  
  if((req.body.sex && (req.body.sex !== 'male' || req.body.sex !== 'female')) || !req.body.sex){ 
    req.body.sex = 'unspecified';
  }

  const newPet = {};
  petAttrs.forEach(key => req.body.hasOwnProperty(key) ? newPet[key] = req.body[key] : undefined);
  knex(req.petType).insert(newPet).returning('*')
    .then(result => res.status(201).json(result))
    .catch(err => next(err));

});
router.delete('/pets/:pets', checkPetType, selectOnePetFromDb, (req, res, next) => {
  if (req.pet) {
    knex(req.petType).del().where('id', req.pet.id)
      .then(() => res.sendStatus(204))
      .catch(err => next(err));
  } else {
    res.sendStatus(204);
  }
});
//for queing without db
// let err;
// if (petType === 'cats') {
//   if(cats.peek()){
//     cats.dequeue();
//     res.sendStatus(204);
//   } else {
//     err = new Error('Sorry, we currently have no cats up for adoption');
//     err.status = 404;
//     next(err);
//   }
// } else if (petType === 'dogs') {
//   if (dogs.peek()) {
//     dogs.dequeue();
//     res.sendStatus(204);
//   } else {
//     err = new Error('Sorry, we currently have no dogs up for adoption');
//     err.status = 404;
//     next(err);
//   }
// } else {
//   err = new Error('Sorry, cats and dogs only! Check back soon for my animals!');
//   err.status = 404;
//   next(err);
// }


module.exports = router;
