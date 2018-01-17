var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //set initial size
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    //check if size > 0
    if (size > 0) {
      var last = storage[size];
      delete storage[size];
      size--;
    }
    
    return last;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
