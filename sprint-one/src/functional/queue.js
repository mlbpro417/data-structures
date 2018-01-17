var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextToLeave = 0;
  var recentlyAdded = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    recentlyAdded ++;
    storage[recentlyAdded] = value;
  };

  someInstance.dequeue = function() {
    if (recentlyAdded > nextToLeave) {
      nextToLeave ++;
      var firstToLeave = storage[nextToLeave];
      delete storage[nextToLeave];
    }
    return firstToLeave;
  };

  someInstance.size = function() {
    return recentlyAdded - nextToLeave;
  };

  return someInstance;
};
