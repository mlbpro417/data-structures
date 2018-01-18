var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.count = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count ++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var leaving = this.storage[this.count];
    delete this.storage[this.count];
    this.count --;
  }
  return leaving;
};

stackMethods.size = function() {
  return this.count;
};