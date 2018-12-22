'use strict';
const q = require('./queue');


let dogsArr = [{
  imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
},
{
  imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
  name: 'Chance',
  sex: 'Male',
  age: 3,
  breed: 'Ridgeback',
  story: 'Owner Ran away'
},
{
  imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
  name: 'Chance',
  sex: 'Male',
  age: 3,
  breed: 'Ridgeback',
  story: 'Owner Ran away'
},
{
  imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
  name: 'Chance',
  sex: 'Male',
  age: 3,
  breed: 'Ridgeback',
  story: 'Owner Ran away'
},
{
  imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
  name: 'Chance',
  sex: 'Male',
  age: 3,
  breed: 'Ridgeback',
  story: 'Owner Ran away'
},,
];

let dogs = new q();

function dropOffDogs(arr) {
  for (let dog of arr) {
    dogs.enqueue(dog);
  }
}

dropOffDogs(dogsArr);


module.exports = dogs;


