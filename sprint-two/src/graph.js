

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.storage.push(node);
  this.newGraph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //checking to see if node is in storage array
  // return this.storage.indexOf(node) > -1;
  return this.newGraph.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate current node's array for edges
  //find indexOf node in edges array
  for (var i = 0; i < this.newGraph[node].length; i++) {
    var edge = this.newGraph[node][i];
    for (var key in this.newGraph) {
      var edgeIdx = this.newGraph[edge].indexOf(node);
      this.newGraph[edge].splice(edgeIdx);
    }
  }

  //delete node
  delete this.newGraph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.newGraph[fromNode].indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // we need to push both ways so that both node values exist in the arrays
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeIndexFrom = this.newGraph[fromNode].indexOf(toNode);
  var edgeIndexTo = this.newGraph[toNode].indexOf(fromNode);
  this.newGraph[fromNode].splice(edgeIndexTo);
  this.newGraph[toNode].splice(edgeIndexFrom);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // this.newGraph[value]
  _.each(this.newGraph, function(item) {
    cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
  1. Adding node = constant / O(1);
  2. Removing node / edge = linear / O(n);
  3. Adding edge = constant / O(1);
  4. Contains lookup = linear / O(n);
  5. forEach = linear / O(n);  
 */


