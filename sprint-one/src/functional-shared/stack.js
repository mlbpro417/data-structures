var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {}; // these keep attributes
  newInstance.count = 0; // size should = 0
  newInstance.storage = {}; // keep seperate storage for clear
  
  
  //used .extend to copy methods into newInstance Obj
  _.extend(newInstance, stackMethods);

  return newInstance;
};



var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  //checking if there's anything in newInstance
  if (this.count > 0) {
    var last = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
  }
  
  //return what was deleted
  return last;
};

stackMethods.size = function() {
  // console.log('!', this.size);
  return this.count; //naming convention
};
