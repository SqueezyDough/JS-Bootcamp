// roads module

// from eloquent javascript chapter 7
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    // properties would be quoted if it contained a space
    // fixed by adding a map function and execute a replace function which replaces spaces with _ and removing quotes
    // you now get much cleaner data :)
    for (let [from, to] of edges.map(r => r.split("-").map(r => r.replace(" ", "_").replace("'", "")))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }

// export graph
module.exports = buildGraph;

// my first sad solution
//const buildGraph = roads.map(road => road.split('-'));