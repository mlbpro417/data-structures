var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.recentlyAdded = 0;
  newInstance.nextToLeave = 0;
  newInstance.storage = {};

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.recentlyAdded ++;
  this.storage[this.recentlyAdded] = value;
};

queueMethods.dequeue = function() {
  if (this.recentlyAdded > this.nextToLeave) {
    this.nextToLeave ++;
    var leaving = this.storage[this.nextToLeave];
    delete this.storage[this.nextToLeave];  
  }
  return leaving;
};

queueMethods.size = function() {
  return this.recentlyAdded - this.nextToLeave;
};