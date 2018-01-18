class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.recentlyAdded = 0;
    this.nextToLeave = 0;
    this.storage = {};
  }
  enqueue(value) {
    this.recentlyAdded ++;
    this.storage[this.recentlyAdded] = value;
  }
  
  dequeue() {
    if (this.recentlyAdded - this.nextToLeave > 0) {
      this.nextToLeave ++;
      var leaving = this.storage[this.nextToLeave];
      delete this.storage[this.nextToLeave];
    } 
    return leaving;
  }
  
  size() {
    return this.recentlyAdded - this.nextToLeave;
  }
}

new Queue();