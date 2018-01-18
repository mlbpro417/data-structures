class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    if (this.count > 0) {
      var leaving = this.storage[this.count];
      delete this.storage[this.count];
      this.count--; 
    }

    return leaving;
  }

  size() {
    return this.count;
  }

}

new Stack();