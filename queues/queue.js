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