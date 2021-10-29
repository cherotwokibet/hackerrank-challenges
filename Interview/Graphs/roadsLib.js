
function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var lib = parseInt(n_temp[2]);
        var road = parseInt(n_temp[3]);
        
        // In case roads and more expensive or equal to library price
        // Build a library in each city and skip over the node connections
        if (road >= lib) {
            input_currentline += m;
            console.log(n * lib);
            continue;
        }
        
        // Build the data structure, array of array
        var nodes = [];
        for (var i = 1; i <= n; i++) {
            nodes[i] = [];
        }
        for(var a1 = 0; a1 < m; a1++){
            var city_1_temp = readLine().split(' ');
            var city_1 = parseInt(city_1_temp[0]);
            var city_2 = parseInt(city_1_temp[1]);
            
            nodes[city_1].push(city_2);
            nodes[city_2].push(city_1);
        }
        
        // Go over all the nodes and conduct a BFS
        // If a node is never seen build a library
        // If a node is reached through a connection and never seen build a road
        var cost = 0;
        var passedOver = [];
        for (var i = 1; i <= n; i++) {
            if (passedOver[i]) {
                continue;
            }
            passedOver[i] = true;
            cost += lib;
            
            var queue = [];
            queue.push(i);
            
            while (queue.length > 0) {
                var nodeIdx = queue.shift();
                var connections = nodes[nodeIdx];
                for (var w = 0; w < connections.length; w++) {
                    if (passedOver[connections[w]]) {
                        continue;
                    }
                    passedOver[connections[w]] = true;
                    queue.push(connections[w]);
                    cost += road;
                }
            }
        }
        console.log(cost);
    }
}

//Solution 2

function main() {
    const q = parseInt(readLine());
    for(let a0 = 0; a0 < q; a0++){
        const n_temp = readLine().split(' ');
        const numCities = parseInt(n_temp[0]);
        const numRoads = parseInt(n_temp[1]);
        const libCost = parseInt(n_temp[2]);
        const roadCost = parseInt(n_temp[3]);
        
        // In case roads and more expensive or equal to library price or no allocated roads
        // Build a library in each city and skip over the node connections
        if (roadCost >= libCost || numRoads === 0) {
            input_currentline += numRoads;
            console.log(numCities * libCost);
            continue;
        }
        
        // Build the data structure, map of sets
        let nodes = new Map();
        for(let a1 = 0; a1 < numRoads; a1++){
            const cities = readLine().split(' ');
            const city_1 = parseInt(cities[0]);
            const city_2 = parseInt(cities[1]);
            if (nodes.has(city_1)){
                nodes.set(city_1,nodes.get(city_1).add(city_2))
            } else {
                nodes.set(city_1,new Set([city_2]))
            }
            if (nodes.has(city_2)){
                nodes.set(city_2,nodes.get(city_2).add(city_1))
            } else {
                nodes.set(city_2,new Set([city_1]))
            }
        }
        
        // Go over all the nodes and conduct a BFS
        // If a node is never seen build a library
        // If a node is reached through a connection and never seen build a road
        let cost = 0;
        let visited = new Set();
        nodes.forEach((val, key, map) => {
            if (!visited.has(key)) {
                visited.add(key);
                cost += libCost;
                
                let queue = [];
                queue.push(key);
                
                while (queue.length > 0) {
                    const nodeIdx = queue.shift();
                    const connections = nodes.get(nodeIdx);
                    connections.forEach((val)=> {
                        if (!visited.has(val)) {
                            visited.add(val);
                            queue.push(val);
                            cost += roadCost;
                        }
                    })
                }
            }
        })
        //account for cities with no roads
        const strandedCities = numCities - visited.size;
        console.log(cost+strandedCities*libCost);
    }
}

//Solution 2 

function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) return n * c_lib;
    const map = adjacencyList(cities);
    let libs = 0;
    let roads = 0;

    for (const vals of map.values()) {
        if (vals.visited) continue;
        roads += dfs(vals, map)-1;
        libs++;
    }

    libs += n - map.size;
    return c_lib * libs + c_road * roads;
}

// Depth-First Search
function dfs(vals, map, roads = 0) {
    if (vals.visited) return roads;
    vals.visited = true;
    vals.cities.forEach(v => {
        roads += dfs(map.get(v), map);
    });
    return roads + 1;
}

// Create Adjacency List
function adjacencyList(cities) {
    const map = new Map();
    cities.forEach(c => {
        const [c1, c2] = c;
        if (map.has(c1)) map.get(c1).cities.push(c2);
        else map.set(c1, {cities: [c2], visited: false});
        if (map.has(c2)) map.get(c2).cities.push(c1);
        else map.set(c2, {cities: [c1], visited: false});
    });
    return map;
}


// Solution 3

class Graph {
    constructor(_numOfVertex) {
      this.numOfVertices = _numOfVertex;
      this.AdjList = new Map();
      this.roads = 0;
    }
  
    // Initialize new vertex
    addVertex(_ver) {
      this.AdjList.set(_ver, []);
    }
  
    // set undirected edge
    addEdge(_verA, _verB) {
      this.AdjList.get(_verA).push(_verB);
      this.AdjList.get(_verB).push(_verA);
    }
  
    // dfs algorithm trigger
    dfs(_startingVertex) {
      // initialization of vertex informations
      // For the vertex is started from 1, 0 index will be empty.
      let visited = new Array(this.numOfVertices + 1);
      for(let i = 1; i <= this.numOfVertices; i++)
        visited[i] = { vertex: i, group: 0, visited: false };
      
      let group = 0;
      for(let i = 1;  i <= this.numOfVertices; i++) {
        if(visited[i].visited) continue;
  
        // if the current vertex is not vistied before, it is new group
        group++;
        this.dfsUtils(i, visited, group);
      }
  
      return ({ numOfGroup: group, numOfRoad: this.roads });
    }
  
    dfsUtils(_vert, _visited, _group) {
      _visited[_vert].visited = true;
      _visited[_vert].group = _group;
      
      let adjs = this.AdjList.get(_vert);
      for(let adj of adjs) {
        if(!_visited[adj].visited) {
          this.dfsUtils(adj, _visited, _group);
          this.roads++;
        }
      }
    }
  }
  
// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
    // redefine variables more recognizable
    const [numOfVertex, libraryCost, roadCost, edges] =
      [n, c_lib, c_road, cities];
  
    // If constructing road cost is more expensive, 
    // construct library each city is always cheaper
    if(libraryCost < roadCost)  return numOfVertex * libraryCost;
  
    // initialize class
    let graph = new Graph(numOfVertex);
    // add vertex. vertex number starts from 1
    for(let i = 1; i <= numOfVertex; i++)
      graph.addVertex(i);
    // add edges
    for(let edge of edges) {
      graph.addEdge(edge[0], edge[1]);
    }
  
    const results = graph.dfs(1);
    const costs = libraryCost * results.numOfGroup + roadCost * results.numOfRoad;
    return costs;
}

// Solution 4

function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Write your code here
    if (c_road >= c_lib) {
        return n * c_lib;
    }

    const visited = {};
    const adj = {};

    const appendToAdj = (k, v) => {
        if (!adj[k]) {
            adj[k] = [v];
        } else {
            adj[k].push(v);
        }
    };

    for (const city of cities) {
        const u = city[0], v = city[1];
        appendToAdj(u, v);
        appendToAdj(v, u);
    }

    const countPerCluster = {};

    const dfs = (u, cluster) => {
        visited[u] = true;
        const neighbours = adj[u] || [];
        for (const v of neighbours) {
            if (!visited[v]) {
                countPerCluster[cluster] = (countPerCluster[cluster] || 0) + 1;
                dfs(v, cluster);
            }
        }
    };

    for (const [u] of cities) {
        dfs(u, u);
    }

    return Object.values(countPerCluster).reduce((acc, numOfRoads) => acc + c_lib + numOfRoads * c_road, 0) +
        (n - Object.keys(visited).length) * c_lib;
}

