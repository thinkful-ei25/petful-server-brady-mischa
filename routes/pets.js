'use strict';
const express = require('express');
const router = express.Router();
const dogs = require('../queues/dogs');
const cats = require('../queues/cats');

/* ================ GET ================ */

router.get('/pets/:pets', (req, res, next) => {
  let petType = req.params.pets;
  if (petType === 'cats') {
    if (cats.peek()) {
      res.json(cats.peek());
    } else {
      res.json();
    }
  } else if (petType === 'dogs') {
    if (dogs.peek()) {
      res.json(dogs.peek());
    } else {
      res.json();
    }
  } else {
    const err = new Error(
      'Sorry, cats and dogs only! Check back soon for my animals!'
    );
    err.status = 404;
    next(err);
  }
});

router.delete('/pets/:pets', (req, res, next) => {
  let petType = req.params.pets;
  let err;
  if (petType === 'cats') {
    if (cats.peek()) {
      cats.dequeue();
      res.sendStatus(204);
    } else {
      err = new Error('Sorry, we currently have no cats up for adoption');
      err.status = 404;
      next(err);
    }
  } else if (petType === 'dogs') {
    if (dogs.peek()) {
      dogs.dequeue();
      res.sendStatus(204);
    } else {
      err = new Error('Sorry, we currently have no dogs up for adoption');
      err.status = 404;
      next(err);
    }
  } else {
    err = new Error(
      'Sorry, cats and dogs only! Check back soon for my animals!'
    );
    err.status = 404;
    next(err);
  }
});

module.exports = router;
