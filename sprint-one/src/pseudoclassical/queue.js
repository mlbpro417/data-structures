var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.recentlyAdded = 0;
  this.nextToLeave = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.recentlyAdded ++;
  this.storage[this.recentlyAdded] = value;
};

Queue.prototype.dequeue = function() {
  if (this.recentlyAdded > this.nextToLeave) {
    this.nextToLeave ++;
    var leaving = this.storage[this.nextToLeave];
    delete this.storage[this.nextToLeave];  
  }
  return leaving;
};

Queue.prototype.size = function() {
  return this.recentlyAdded - this.nextToLeave;
};


new Queue();