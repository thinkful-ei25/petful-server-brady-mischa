'use strict';



class _Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _Node(value);

    if(!this.first) {
      this.first = node;
    }
    if(this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last=node;
  }

  dequeue() {
    if(!this.first)return;
    const node = this.first;
    this.first = node.prev;

    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek(){
    return this.first.value;
  }
} 

module.exports = Queue;


/*--- for queing without db in ../routes---*/

// if(petType === 'cats') {
//   res.json(cats.peek());
// } else if(petType === 'dogs') {
//   res.json(dogs.peek());
// } else {
//   const err = new Error('Sorry, cats and dogs only! Check back soon for my animals!');
//   err.status = 404;
//   next(err);
  
// }

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
