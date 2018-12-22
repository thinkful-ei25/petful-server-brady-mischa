'use strict';
const q = require('./queue');

let dogsArr = [
  {
    imageURL:
      'https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/diy_blog/Are-Puppies-Hyper-After-Being-Spayed.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 1,
    breed: 'Golden Retriever',
    story: 'I was born on the road!'
  },
  {
    imageURL:
      'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Andy',
    sex: 'Female',
    age: 5,
    breed: 'Ridgeback',
    story: 'I ran away to test my talents in Hollywood. Ruff Mistake...'
  },
  {
    imageURL:
      'https://4pawsins.com/wp-content/uploads/2018/07/corgi-swimming.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Dory',
    sex: 'Female',
    age: 3,
    breed: 'Corgi Mix',
    story: 'My owners left while I was swimming in the backyard.'
  },
  {
    imageURL:
      'https://baggybulldogs.files.wordpress.com/2012/05/2012-05-11_1538.png',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Scooter',
    sex: 'Male',
    age: 1,
    breed: 'Enlish Bulldog',
    story: 'I decided to hop on my board and never look back!'
  },
  {
    imageURL:
      'https://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Francis',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner threw me out of my house for jamming too hard.'
  },
  ,
];

let dogs = new q();

function dropOffDogs(arr) {
  for (let dog of arr) {
    dogs.enqueue(dog);
  }
}

dropOffDogs(dogsArr);

module.exports = dogs;
