
// Complete the minTime function below.
function findParent(parent, u) {
    if(parent[u] == u) return u;
    return findParent(parent, parent[u]);
}

function join(parent, u, v) {
    let a = findParent(parent, u);
    let b = findParent(parent, v);
    parent[b] = a;
}

function calculateCost(n, roads, m) {
    let cost = 0, parent = {};
    
    for(let i = 0; i < n; i++) parent[i] = i;
    
    for(let i = 0; i < roads.length; i++) {
        let u = findParent(parent, roads[i][0]);
        let v = findParent(parent, roads[i][1]);
        
        if( m[u] && m[v] ) {
            cost += roads[i][2];
        } else if( m[u] && !m[v] ) {
            join(parent, roads[i][0], roads[i][1]);
        } else {
            join(parent, roads[i][1], roads[i][0]);
        }
    }
    return cost;
}

function minTime(n, roads, machines) {
    let m = {};
    
    for(let i = 0; i < n; i++) {
        m[i] = false;
    }
    for(let i = 0; i < machines.length; i++) {
        m[machines[i]] = true;
    }
    roads = roads.sort((a, b) => b[2] - a[2]);
    
    return calculateCost(n, roads, m);
}

//Solution 2

