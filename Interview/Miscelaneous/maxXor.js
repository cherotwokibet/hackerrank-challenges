
// Complete the maxXor function below.
function maxXor(arr, queries) {
    // solve here
    const trieRoot = new Array(2);
    arr.forEach(num => {
        for(let j = 31, curr = trieRoot; j >= 0; j--) {
            const bit = num & 2 ** j ? 1 : 0;
            if(!curr[bit]) curr[bit] = new Array(2);
            curr = curr[bit];
        }
    });
    return queries.map(num => {
        let curr = trieRoot, maxXor = 0;
        for(let j = 31; j >= 0; j--) {
            const bit = num & 2 ** j ? 0 : 1;
            if(curr[bit]) curr = curr[bit], maxXor += 2 ** j;
            else curr = curr[bit ? 0 : 1];
        }
        return maxXor;
    });

}

//Solution 2

function Trie() {
    this.root = TrieNode();
}
Trie.prototype.insert = function(value) {
    let bit, current = this.root, index;
    
    for(let i = 31; i >= 0; i--) {
        value >> i & 1 ? index = 1 : index = 0;
        if(!current.children[index]) current.children[index] = TrieNode();
        current = current.children[index];
    }
    current.end = true;
}
Trie.prototype.search = function(value, array) {
    let bit, current = this.root, max = 0, index;
    for(let i = 31; i >= 0; i--) {
        if(value & ( 1<<i )) index = 1 
        else index = 0;
        let _index = (index === 1 ? 0 : 1);
        if(current && current.children[_index] != null && !current.end) {
            max += Math.pow(2, i);
            current = current.children[_index];
        } else {
            current = current.children[index];
        }
    }
    array.push(max);
}


// Complete the maxXor function below.
function maxXor(arr, queries) {
    let trie = new Trie(), a = [];
    for(let i = 0; i < arr.length; i++) {
        trie.insert(arr[i]);
    }    
    for(let i = 0; i < queries.length; i++) {
        trie.search(queries[i], a);
    }
    return a;
}


//Solution 3

function maxXor(arr, queries) {
    // solve here
    let arrN = arr.length,
        queriesN = queries.length,
        cache = {},
        results = [], 
        switches = {0: 1, 1: 0},
        bitNumber = 32,
        neededBits = bitNumber;
    for(let o = 0; o < arrN; o += 1) {
        let currentNumber = arr[o],
            bin = currentNumber.toString(2).padStart(bitNumber, 0),
            currentNode = cache;
        for(let i = 0; i < bitNumber; i += 1) {
            let currentBit = bin[i];
            if(!currentNode[currentBit]) {
                currentNode[currentBit] = i === bitNumber - 1 ? currentNumber: {};
            }
            currentNode = currentNode[currentBit];
        }
    }
    
    while(!cache[1] || typeof cache === 'number') {
        cache = cache[0];
        neededBits -= 1;
    }
    
    for(let i = 0; i < queriesN; i += 1) {
        let currentNode = cache,
            currentNumber = queries[i],
            bin = currentNumber.toString(2).padStart(bitNumber, 0),
            u = (bitNumber - neededBits);
        while(typeof currentNode !== 'number') {
            let current = bin[u],
                w = switches[current];
            currentNode = typeof currentNode[w] === 'undefined' ? currentNode[current] : currentNode[w];
            u += 1;
        }
        results.push(currentNode ^ currentNumber);
    }
    return results;
}

