var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // add something to the list
    // implementing the node function to get the scope for the new node
    var newNode = Node(value);
    
    // update the tail to the newest added item
    // update list.tail
    if (list.tail === null) {
      list.tail = newNode;
    } else {
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // remove the item from the list
    if (list.head !== null) {
      var currentHead = list.head;
      delete list.head;
      list.head = node.next; //node.node.next ?
      return currentHead;
    }
    // update the head to the next in line
    // update list.head
    // return the value
  };

  list.contains = function(target) {
    // check each item if its our target
    // check node.value
    // return boolean
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
