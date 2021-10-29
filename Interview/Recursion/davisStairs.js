
var cache = new Set();

function stepPerms(n) {
    // Write your code here
    if (cache[n]) return cache[n];
    if (n === 0) return 1;
    if (n < 0) return 0;
    cache[n] = stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3);
    return cache[n];

}


// Solution 2
//Effective
function stepPerms(n, memo = [ 0, 1, 2, 4]) {
    // Write your code here
    if (memo[n]) return memo[n];
    memo[n] = stepPerms(n - 1, memo) + stepPerms(n - 2, memo) + stepPerms(n - 3, memo);      
    return memo[n];

}

//Solution 3

//Start with base cases, add more as calculated
var memCache = {
    "0": 0, // 0 ways, starting base case
    
    "1": 1, // 1 way: 0 -> 1
    
    "2": 2, //2 ways: 0 -> 1 -> 2,
            //        0 -> 2
    
    "3": 4  //4 ways: 0 -> 1 -> 2 -> 3 -> 4,
            //        0 -> 2 -> 4,
            //        0 -> 1 -> 3 -> 4, 
            //        0 -> 2 -> 3 -> 4
};

//Can only reach stair step n from steps (n - 3), (n - 2)
//or (n - 1). Use expanded fibonacci algorithm
function getPossibleSteps(n) {
    //Prior calculated n-staircase steps encountered
    if(memCache[n]) {
        return memCache[n];
    }
    
    //Add previous steps results (recursing as necessary)
    //and store new result.
    //e.g. for 4-step staircase:
    //
    //3-step ways (4) + 2-step ways (2) + 1-step ways (1)
    // = 7 ways
    //
    //for 5-step staircase:
    //4-step ways (7) + 3-step ways (4) + 2-step ways (2)
    // = 13 ways
    //
    //etc.
    memCache[n] = getPossibleSteps(n - 3) + getPossibleSteps(n - 2) + getPossibleSteps(n - 1);
    return memCache[n];
}

//Solution 4

const pre = [0, 1, 2, 4];
function stepPerms(n) {
    for(let i = pre.length; i <= n; i++) {
        pre.push(pre[i - 1] + pre[i - 2] + pre[i - 3]);
    }
    return pre[n];
}

//Solution 5 recursive
const pre = [0, 1, 2, 4];
function stepPerms(n) {
    if(!(n in pre)) pre[n] = stepPerms(n - 1)
    + stepPerms(n - 2) + stepPerms(n - 3);
    return pre[n];
}

