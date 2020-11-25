// Run this code at https://editor.p5js.org/
// Code is copied from one of my projects, please see
// https://github.com/samporapeli/background-generator/blob/graph/web/graph.js

class Node {
  constructor(x, y, graph) {
    this.x = x;
    this.y = y;
    this.graph = graph;
    this.neighbors = [];
  }
  degree() {
    return this.neighbors.length;
  }
  addNeighbor(node) {
    if (this.neighbors.includes(node)) {
      return false;
    } else {
      this.neighbors.push(node);
      node.addNeighbor(this);
      return true;
    }
  }
  draw() {
    strokeWeight(8);
    circle(this.x, this.y, 8);
    strokeWeight(3);
    for (let i = 0; i < this.neighbors.length; i++) {
      const neighbor = this.neighbors[i];
      strokeWeight(this.degree);
      line(this.x, this.y, neighbor.x, neighbor.y);
    }
  }
  delete() {
    for (let i = 0; i < this.neighbors; i++) {
      const neighbor = this.neighbors[i];
      neighbor.neighbors = neighbor.neighbors.filter(
        n => n !== this
      );
    }
    this.graph.nodes = this.graph.nodes.filter(
      n => n !== this
    );
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  addNode(x, y) {
    const node = new Node(x, y, this);
    this.nodes.push(node);
  }
  addEdge(node1, node2) {
    node1.addNeighbor(node2);
  }
  draw() {
    this.nodes.forEach(n => n.draw());
  }
}

function setup() {
  createCanvas(400, 200);
  noLoop();
}

const graph = new Graph();

function draw() {
  const nodes = [
      // Replace this variable with actual values
  ]

  const edges = [
      // Replace this variable with actual values
  ];

  nodes.forEach(node => graph.addNode(
    node[0],
    node[1]
  ));
  edges.forEach(edge => graph.addEdge(
    graph.nodes[edge[0]],
    graph.nodes[edge[1]]
  ));
  graph.draw();
}
