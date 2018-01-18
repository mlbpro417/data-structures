var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.recentlyAdded = 0;
  newInstance.nextToLeave = 0;
  newInstance.storage = {};
  _.extend(newInstance, queueMethods);

  return newInstance;  
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.recentlyAdded++;
  this.storage[this.recentlyAdded] = value;
};

queueMethods.dequeue = function () {
  //check if there is a queue
  if (this.recentlyAdded - this.nextToLeave > 0) {
    this.nextToLeave++;
    var leaving = this.storage[this.nextToLeave];
    delete this.storage[this.nextToLeave];
  }

  return leaving;
};

queueMethods.size = function () {
  //newest minus oldest
  return this.recentlyAdded - this.nextToLeave;
};