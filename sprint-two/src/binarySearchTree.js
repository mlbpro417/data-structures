var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = [];
  newTree.right = [];

  // your code here
  _.extend(newTree, binarySearchTreeMethods);

  return newTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  // new insertion has a value
  // check if that value is less than (newTree.left) or greater than (newTree.right) its parent
  // check to see if it has children and repeat above step
  // push that into its corresponding side after no children have been found
  // if (less than left and .left has no children)
  var newChild = BinarySearchTree(value);

  var current = this.value;

  while (current) { // while current and left.length is 0 and right.length is 0
    if (current > value && this.left.length > 0) { // this means children exist
      current = this.left[0].value;
    } else if (current > value && this.left[0].left.length === 0) { // the array is empty
      // we need to push something
      this.left.push(newChild);
      current = false;
      break;
    } else if (current < value && this.right.length > 0) {
      current = this.right[0].value;
    } else if (current < value && this.right[0].right.length === 0) {
      this.right.push(newChild);
      current = false;
      break;
    } else {
      current = false;
      break;
    }
  }

  

};


binarySearchTreeMethods.contains = function(value) {

  var status = false;
  
  var checkNode = function(node) {
    if (node.value === target) {
      status = true;
    } 
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) { 
        checkNode(node.children[i]);
      }
    }
    
  };

  checkNode(this);
  return status;
};


binarySearchTreeMethods.depthFirstLog = function(cb) {
  var array = [];
  for (var key in this.newTree) {
    array.push(key);
  }

  for (var i = 0; i < array.length; i++) {
    var eachNode = array[i];
    cb(eachNode);
  }
};

 
/*
 * Complexity: What is the time complexity of the above functions?
  1) All methods = O(log n);
 */
