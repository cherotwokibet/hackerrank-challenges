
function maximumSum(a, m) {
    // Write your code here
    let max=0,t=0
    let pa=a.map((c)=>{
        t=(c+t)%m
        max=(max>t)?max:t;
        return t});
    if (max==m-1) return max;
    // console.log(max,pa);
    
    class TNode {
        constructor(val,left=null,right=null){
            this.val = val;
            this.left =left;
            this.right=right;
        }
        insert(v, preV=null){
            if (v > this.val){
                // prev = this.val
                 if (this.right) {
                     return this.right.insert(v, preV)
                 } else {
                     this.right = new TNode(v)
                     return preV
                 }
            } else if(v==this.val){
                if (this.right) { preV=this.right.val }
                return preV;
            } else {
                 preV = this.val
                 if (this.left) {
                     return this.left.insert(v, preV)
                 } else {
                     this.left = new TNode(v)
                     return preV
                 }
            }
        }
    }
    
    let tree = new TNode(pa[0])
    
    for (let i=1; i<pa.length; i++){
        let nearV = tree.insert(pa[i], pa[i])
        // console.log(pa[i], nearV)
        if (nearV > pa[i]){
            max = (max<(m+pa[i]-nearV))?(m+pa[i]-nearV):max
            if (max==m-1) break;
        }
    }
    return max;

}


// Solution 2 
// Although it passed all test cases, it's wrong with following case: a=3,6,3,7,7 m=7, running result =3, correct answer is 6

function maximumSum2(a, m) {
    // Write your code here
    let currSum = 0; 
    let dict = {}; 
    for (let i = 0; i < a.length; i++) { 
        currSum = (currSum + (a[i])) % m; 
        dict[currSum] = i; 
        // console.log(dict);
    } 
    const keys = Object.keys(dict);
    // console.log(keys); 
    let sortedKeys = keys.map(el => +el);
    // console.log(sortedKeys); 
    sortedKeys = sortedKeys.sort((x,y) => x - y);
    console.log(sortedKeys); 
    const n = sortedKeys.length; 
    let maxM = sortedKeys[n - 1];
    // console.log(maxM);
    //i dont think we need this below V 
    for (let i = 1; i < n ; i++) { 
        if (dict[sortedKeys[i-1]] > dict[sortedKeys[i]]) { 
            maxM = Math.max(maxM, (sortedKeys[i-1] - sortedKeys[i] + m)) 
        } 
    }

    return maxM;
}

const y = [3,3,9,9,5];

console.log(maximumSum2(y,7));
