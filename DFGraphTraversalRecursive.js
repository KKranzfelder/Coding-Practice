class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2){
    if (!this.adjacencyList[vertex1].includes(vertex2)){
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  DFTraversalRecursive(node){
    let returnedNodes = [];
    let visitedNodes = {};
    const adjacencyList = this.adjacencyList;

    (function DFTraversal(vertex) {
      if (!vertex) return null;
      if (!adjacencyList[vertex] || !adjacencyList[vertex].length) return;
      visitedNodes[vertex] = true;
      returnedNodes.push(vertex);
      adjacencyList[vertex].forEach(edge =>  {
        if (!visitedNodes[edge]) {
          return DFTraversal(edge);
        }
      })
    })(node);
    return returnedNodes;
  }
};

const g = new Graph;
console.log(g.DFTraversalRecursive('you'));
g.addVertex('you');
g.addVertex('neighbor1');
g.addVertex('friendOfNeighbor1');
g.addVertex('sonOfNeighbor1');
g.addVertex('neighbor2');
g.addVertex('daughterOfNeighbor2');
g.addEdge('you', 'neighbor1');
g.addEdge('you', 'neighbor2');
g.addEdge('neighbor1', 'friendOfNeighbor1');
g.addEdge('neighbor1', 'sonOfNeighbor1');
g.addEdge('neighbor2', 'daughterOfNeighbor2');
g.addEdge('sonOfNeighbor1', 'daughterOfNeighbor2');
console.log(g.DFTraversalRecursive('you'));

