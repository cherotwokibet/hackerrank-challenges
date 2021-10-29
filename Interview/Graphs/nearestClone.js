
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    // solve here
    if (ids.reduce((a,c)=>a + (c === val),0) < 2) return -1
    let h = new Map(Array.from(new Array(graphNodes),(_,i)=>[i+1,[]])), ans = Infinity
    for (let i = 0; i < graphFrom.length; i++) {
        h.get(graphFrom[i]).push(graphTo[i])
        h.get(graphTo[i]).push(graphFrom[i])
    }
    const chk = (node, last, dist) => {
        if (dist >= ans || ans === 1) return
        if (ids[node-1] === val && dist) ans = dist
        else for (let el of h.get(node)) if (el !== last) chk(el, node, dist + 1)
    }
    for (let i = 0; i < ids.length; i++) if (ids[i] === val) chk(i+1, null, 0)
    return ans
}


//Solution 2 
function Queue() {
    this.elements = [];
    }
    Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
    };
    Queue.prototype.dequeue = function () {
        return this.elements.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.elements.length == 0;
    };
    Queue.prototype.peek = function () {
        return !this.isEmpty() ? this.elements[0] : undefined;
    };
    Queue.prototype.length = function() {
        return this.elements.length;
    }
    Queue.prototype.empty = function() {
        return this.elements = [];
}
 
 // Complete the findShortest function below.
 
 /*
  * For the unweighted graph, <name>:
  *
  * 1. The number of nodes is <name>Nodes.
  * 2. The number of edges is <name>Edges.
  * 3. An edge exists between <name>From[i] to <name>To[i].
  *
  */
 function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
     // solve here
    function makeAdjacencyList(graphNodes, graphFrom ,graphTo) {
        let list = new Array(graphNodes);
        for (let i=0; i<graphNodes; i++) {
            list[i] = new Array();
        }
        for (let i=0; i<graphFrom.length; i++) {
            let from = graphFrom[i]-1;
            let to = graphTo[i]-1;
            list[from].push(to);
            list[to].push(from);
        }
        return list;
    }

    let adjList = makeAdjacencyList(graphNodes, graphFrom, graphTo);
    let markedList;

    //do BFS
    let queue = new Queue();
    // go through all nodes to find the colors
    let colorMatchFound = false;
    let colorMatch = false;
    let distance, minDistance = Number.MAX_SAFE_INTEGER;
    for (let i=0; i<graphNodes; i++) {
        // find a node with the required color
        if (ids[i] === val)  {
            markedList = new Array(graphNodes).fill(false);
            markedList[i] = true;
            distance = 0;
            colorMatch = false;
            queue.empty();
            queue.enqueue(i);
            while (!queue.isEmpty()) {
                if (colorMatch) {
                    break;
                }
                let node = queue.dequeue();
                distance++;
                for (let adj of adjList[node]) {
                    if (!markedList[adj]) {
                        if (ids[adj] === val) {
                            colorMatch = true;
                            colorMatchFound = true;
                            break;
                        }
                        markedList[adj]=true;
                        queue.enqueue(adj);
                    }
                }
            }
            if (colorMatch) {
                if (distance < minDistance) {
                    minDistance = distance;
                }
            }
        }
    }
 
    if (colorMatchFound) {
        return minDistance;
    } else {
        return -1;
    }
}

