
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var q = parseInt(input.shift());

    var arrIdx = 0;
    for (var i = 0; i < q; i++) {
        var arr = input[arrIdx++].split(" ").map(Number);
        var n = arr[0];
        var m = arr[1];
        
        // Build data structure, array in array
        var nodesArr = [];
        for (var w = 0; w < m; w++) {
            var node = input[arrIdx++].split(" ").map(Number);
            var from = node[0];
            var to = node[1];

            if (!nodesArr[from]) {
                nodesArr[from] = [];
            }
            if (!nodesArr[to]) {
                nodesArr[to] = [];
            }
            if (from > n || to > n) {
                continue;
            }
            nodesArr[from].push(to);
            nodesArr[to].push(from);
        }


        var root = parseInt(input[arrIdx++]);
        
        // Process graph using BFS
        var passedOver = [];
        processGraph(nodesArr, root, passedOver);
        
        // Print results
        var res = [];
        for (var j = 1; j <= n; j++) {
            if (j == root) {
                continue;
            }

            if (!passedOver[j]) {
                res.push(-1);
                continue;
            }

            res.push(passedOver[j]);
        }
        console.log(res.join(" "));
    }
}


//Solution 2

class Graph {
    constructor(size) {
    }

    addEdge(firstNode, secondNode) {
    }

    shortestReach(startNode) {
    }
}

function processData(input) {
    let line = 0;
    let inputs = input.split('\n');
    let queries = inputs[line++];
    for (let t = 0; t < queries; t++) {
        let nm = inputs[line++].split(' ');
        let n = nm[0];
        let graph = new Graph(n);
        
        let m = nm[1];
        for (let i = 0; i < m; i++) {
            let nodes = inputs[line++].split(' ');
            let u = nodes[0] - 1;
            let v = nodes[1] - 1;

            graph.addEdge(u, v);
        }

        let startId = inputs[line++] - 1;
        let distances = graph.shortestReach(startId);
        let output = "";
        for (let i = 0; i < distances.length; i++) {
            if (i != startId) {
                output += distances[i] + ' ';
            }
        }

        console.log(output);
    }
}

//Solution 3 

function processData(input) {
    //Enter your code here
    const inputArr = input.split(/\r?\n/);
    inputArr.splice(0, 1);
    while (inputArr.length > 0) {
        const [numNodes, numEdges] = inputArr[0].split(/\s/);
        const edgeArr = inputArr.splice(0, +numEdges + 2);

        // console.log(numEdges, edgeArr, inputArr, inputArr.length);
        const edgeList = edgeArr.slice(1, +numEdges + 1);
        const startNode = +edgeArr[edgeArr.length - 1];
        solve(+numNodes, edgeList, startNode);
    }

    function solve(numNodes, edgeList, startNode) {
        // console.log('solve', edgeList, startNode);
        const adjList = Array(numNodes + 1).fill(false).map(_ => []);
        for (let i = 0; i < edgeList.length; i++) {
            let [n1, n2] = edgeList[i].split(/\s/);
            n1 = +n1;
            n2 = +n2;
            adjList[n1].push(n2);
            adjList[n2].push(n1);
        }
        // console.log(adjList);
        const bfsInfo = [null];
        for (let i = 1; i < adjList.length; i++) {
            bfsInfo[i] = -1;
        }
        bfsInfo[startNode] = 0;
        const queue = [startNode];
        while (queue.length > 0) {
            const current = queue.shift();
            for (let i = 0; i < adjList[current].length; i++) {
                const neighbour = adjList[current][i];
                if (bfsInfo[neighbour] === -1) {
                    bfsInfo[neighbour] = bfsInfo[current] + 6;
                    queue.push(neighbour);
                }
            }
        }
        bfsInfo.splice(startNode, 1);
        bfsInfo.splice(0, 1);

        console.log(bfsInfo.join(' '));
    }
}


// Solution 4 

function processData(input) {
    //Enter your code here
    let ip = input.split('\n')
    let test_cases = parseInt(ip.splice(0, 1))
    for(let i = 0; i<test_cases; i++){
        let node_edges = ip.splice(0, 1)
        let graph = new Bfs(parseInt(node_edges[0][0]), ip.splice(0, parseInt(node_edges[0][2])+1))
        graph.construct_graph()
        graph.create_distances()
        graph.print_distances()}

} 

class Bfs{
    constructor(total_nodes, input){
        this.graph = {}
        this.total_nodes = total_nodes
        this.input = input
        this.start_node
        this.distances
    }

    construct_graph(){
        this.start_node = parseInt(this.input.pop())
            for(let i=0;i < this.input.length;i++){
            let origin = parseInt(this.input[i][0])
            let end = parseInt(this.input[i][2])
            if(this.graph[origin]){
                this.graph[origin].push(end)
            }else{
                this.graph[origin] = [end]
            }
            if(this.graph[end]){
                this.graph[end].push(origin)
            }else{
                this.graph[end] = [origin]
            }
    }}

    create_distances(){
            let qu = [this.start_node]
            let distances =new Array(this.total_nodes).fill(-1)
            distances[this.start_node - 1] = 0
            while(qu.length > 0){
                let node = qu.splice(0, 1)
                this.graph[node[0]].forEach((el) => {
                    if(distances[el-1] == -1){
                        distances[el-1] = distances[node[0]-1] + 6
                        qu.push(el)
                    }
                })
            }
            this.distances = [...distances.slice(0, this.start_node-1), ...(distances.slice(this.start_node))]
    }

    print_distances(){
        console.log(this.distances.join(' '))
    }
}