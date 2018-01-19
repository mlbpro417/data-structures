var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.storage = {};

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // make an object to put the value in
  // {value: 1, child: []}
  // var newChild = [];
  // this.value = value;
  this.children.push({value: value, children: []}); 
  // we can use push to add a node to the new tree
  // set the value to the target node  
  
  //this.childen.push(value);

  // parent -- child
  // var parent = obj
  // parent.children.addChild
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
