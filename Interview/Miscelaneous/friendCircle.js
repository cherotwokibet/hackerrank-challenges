
// Complete the maxCircle function below.
function maxCircle(queries) {
    var results = [];
    var max = 0;
    var parents = {}
    var size = {}

    function find(e) {
        if (!parents[e]) {
            parents[e] = e;
            size[e] = 1;
            return e;
        }

        if (e == parents[e])
            return e;
        
        var rep = find(parents[e]);
        //path compression
        parents[e] = rep;
        return rep;
    }

    function union(i, j) {
        var pi = find(i);
        var pj = find(j);

        size[pi] += size[pj];
        parents[pj] = pi;
    }
        
    for (var i = 0; i < queries.length; i++) {
        var p1 = find(queries[i][0]);
        var p2 = find(queries[i][1]);

        if (p1 != p2) {
            union(p1, p2);
            if (size[p1] > max)
                max = size[p1];
        }
        
        results[i] = max;
    }
    
    return results;

}


//Solution 2

function initialize(queries, parent, size = {}) {
    for(let i = 0; i < queries.length; i++) {
        parent[queries[i][0]] = queries[i][0];
        parent[queries[i][1]] = queries[i][1];
        size[queries[i][0]] = 1;
        size[queries[i][1]] = 1;
    }
}

function getParent(a, parent) {
    if(parent[a] == a) return a;
    let result = getParent(parent[a], parent);
    return result;
}

// Complete the maxCircle function below.
function maxCircle(queries) {
    if(queries.length === 1) return 1;
    let parent = {}, 
        size = {}, 
        parentA, 
        parentB, 
        max = -Infinity, 
        result = [];
        
    initialize(queries, parent, size);
    for(let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        parentA = getParent(a, parent);
        parentB = getParent(b, parent);
    
        if(parentA != parentB) {
            if(size[parentA] >= size[parentB]) {
                size[parentA] += size[parentB];
                parent[parentB] = parentA;
                max = Math.max(size[parentA], max);
            } else {
                size[parentB] += size[parentA];
                parent[parentA] = parentB;
                max = Math.max(size[parentB], max);
            }
        }    
        result.push(max);  
    }
    return result;
}

//Solution 3

