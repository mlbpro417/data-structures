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
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }

    if (list.head === null) {
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    // remove the item from the list
    if (list.head !== null) {
      //set current head value
      var currentHead = list.head.value;
      //reassigned link to next head
      list.head = list.head.next;
    }
    // return the value
    return currentHead;
  };

  list.contains = function(target) {
    // check each item if its our target
    // check node.value
    // return boolean
    
    // while list.node.next is not null
    // check list.node.value equals target
    // return false outside of while loop
    var current = list.head;

    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
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

  1) adding Tail and removing Head = constant / O(1);
  2) checking if target with contains = linear / O(n);
 */



