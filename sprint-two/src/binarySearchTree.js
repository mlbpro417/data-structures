var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  // your code here
  newTree.children = []; 
  _.extend(newTree, binarySearchTreeMethods);

  return newTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

};


binarySearchTreeMethods.contains = function(value) {

  // var status = false;
  
  // var checkNode = function(node) {
  //   if (node.value === target) {
  //     status = true;
  //   } 
  //   if (node.children) {
  //     for (var i = 0; i < node.children.length; i++) { 
  //       checkNode(node.children[i]);
  //     }
  //   }
    
  // };
  // checkNode(this);
  // return status;


};


binarySearchTreeMethods.depthFirstLog = function(cb) {

};

 
/*
 * Complexity: What is the time complexity of the above functions?
 */
