'use strict';
const express = require('express');
const router = express.Router();
// const dogs = require('../queues/dogs');
// const cats = require('../queues/cats');
const knex = require('../knex');

/* ================ GET ================ */

function selectOnePetFromDb(req,res,next){
  let petType = req.params.pets;
  if(petType !== 'dogs' && petType !== 'cats'){
    const err = new Error;
    err.status = 404;
    err.message = ('Sorry, cats and dogs only! Check back soon for my animals!');
    next(err);
  }
  knex(petType).select().limit(1)
    .then(([pet]) => {
      if(pet){
        req.pet = pet;
      }else{
        req.pet = null;
      }
      next();
    })
    .catch(err =>  next(err));
}
router.get('/pets/:pets', selectOnePetFromDb, (req, res) => {
  console.log('get request:', req.pet);
  if(req.pet){
    res.json(req.pet);
  }else{
    res.sendStatus(200);
  }
});
/*--- for queing without db ---*/

// if(petType === 'cats') {
//   res.json(cats.peek());
// } else if(petType === 'dogs') {
//   res.json(dogs.peek());
// } else {
//   const err = new Error('Sorry, cats and dogs only! Check back soon for my animals!');
//   err.status = 404;
//   next(err);
  
// }

router.delete('/pets/:pets', selectOnePetFromDb, (req, res, next) => {
  let petType = req.params.pets;
  if(req.pet){
    knex(petType).del().where('id', req.pet.id)
      .then(() => res.sendStatus(204))
      .catch(err => next(err));
  }else{
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
