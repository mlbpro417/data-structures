var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new instance and have access to tree methods
  var newChild = Tree(value);
  
  // we can use push to add a node to the new tree
  // set the value to the target node 
  this.children.push(newChild); 
   
};

treeMethods.contains = function(target) {
  // base case: if value !== target && children.length = 0
  // recursion case: check if childs value = target
  // if not, it checks to see if it has any children
  
  // if (this.value !== target && this.children.length === 0) {
  //   return false;
  // } else if (this.value === target) {
  //   return true;
  // } else {
  //   for (var i = 0; i < this.children.length; i++) {
  //     // if (this.children[i].children.length > 0) {
  //     return this.children[i].contains(target);
  //     // }
  //   }
  // }

  

  var checkNode = function(node) {
    if (node.value === target) {
      return true;
    } else {
      for (var i = 0; i < node.children.length; i++) { 
        checkNode(node.children[i]);
      }
      return false;
    }
  };
  checkNode();
  // // we need an else if to check if the length > 0
  // // for loop should go into the next layer down
  // checkNode(this.children);
  // we need an else if to check if the length > 0
  // for loop should go into the next layer down
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
