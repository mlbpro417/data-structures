//    [0,1,2,3] = 4 set limit of array
//    use hashing function to generate an index
//    [[],1,2,3] = check to see if there is a bucket at that index; if not make a bucket
//    [[['hack', 'reactor'], ['javi', 'enriquez']],1,2,3] = need to check if the new key exists in the bucket 
//    use the buckets index to check if the values exist

var HashTable = function() {
  this._limit = 8; // length 8
  this._storage = LimitedArray(this._limit); // [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if theres bucket that has empty [] at idx
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      // we only need to check the [0] index of that array for the key
      var key = this._storage[index][i][0];
      if (key === k) {
        this._storage[index][i][1] = v;
        // does the key already exist? if so, then overwrite value
      } 
    } 

    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate through our storage array index
  // key will always be the [0]
  // value will always be [1]
  // return the value
  for (var i = 0; i < this._storage[index].length; i++) {
    var key = this._storage[index][i][0];
    if (key === k) {
      return this._storage[index][i][1];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    var key = this._storage[index][i][0];
    if (key === k) {
      this._storage[index][i].splice(i);
    }
  } 
};

//new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?

  1) insert / Remove / Retrieve = Best Cases: Constant / O(1); Worst Cases: Linear / O(n);
 */

