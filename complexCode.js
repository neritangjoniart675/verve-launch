// filename: complexCode.js

// This code is an implementation of a custom data structure called "Graph" in JavaScript.
// It provides methods to add and remove nodes, and to add and remove edges between nodes.
// The code also implements a method to check connectivity between two nodes in the graph.
// It uses an adjacency list to represent the graph internally.

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  // Add a new node to the graph
  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, new Set());
    }
  }

  // Remove a node from the graph
  removeNode(node) {
    if (this.nodes.has(node)) {
      // Remove edges connected to this node
      this.nodes.forEach((adjacentNodes) => {
        adjacentNodes.delete(node);
      });
      this.nodes.delete(node);
    }
  }

  // Add an edge between two nodes
  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).add(node2);
      this.nodes.get(node2).add(node1);
    }
  }

  // Remove an edge between two nodes
  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).delete(node2);
      this.nodes.get(node2).delete(node1);
    }
  }

  // Check if two nodes are connected
  isConnected(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const visited = new Set();
      const queue = [node1];

      while (queue.length > 0) {
        const current = queue.shift();
        visited.add(current);

        if (current === node2) {
          return true;
        }

        this.nodes.get(current).forEach((adjacent) => {
          if (!visited.has(adjacent)) {
            queue.push(adjacent);
          }
        });
      }
    }

    return false;
  }
}

// Usage example:
const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

console.log(graph.isConnected(1, 4)); // Output: true
console.log(graph.isConnected(1, 3)); // Output: true
console.log(graph.isConnected(2, 4)); // Output: true
console.log(graph.isConnected(1, 5)); // Output: false

graph.removeEdge(2, 3);
console.log(graph.isConnected(1, 4)); // Output: false
console.log(graph.isConnected(1, 3)); // Output: false

graph.removeNode(4);
console.log(graph.isConnected(1, 2)); // Output: true