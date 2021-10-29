
// Solution 1 

// Complete the triplets function below.
function triplets(a, b, c) {
    const sortedUnique = (value, index, self) => !(index>0 && value == self[index-1]);

    let count = 0;
    const as = a.sort((a, b) => a - b).filter(sortedUnique);
    // console.log(as);
    const bs = b.sort((a, b) => a - b).filter(sortedUnique);
    const cs = c.sort((a, b) => a - b).filter(sortedUnique);
    let ai=0, bi=0, ci=0;
    while(bi < bs.length) {
        while(ai < as.length && as[ai] <= bs[bi]) {
            ai++; 
            // console.log('ai: '+ai);
        }
        while(ci < cs.length && cs[ci] <= bs[bi]) { 
            ci++;
            // console.log('ci: '+ci);
        }
        count = count + ci * ai;
        // console.log('count: '+count);
        bi++;
        // console.log('bi: '+bi);
    }
    return count;
}

//Solution 2

// Complete the triplets function below.
function triplets2(a, b, c) {
    let result = 0;
    
    // sort and deduplicate
    // https://stackoverflow.com/a/9229821/7954089
    let aa = a.sort((x, y) => x - y).filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
    let bb = [...new Set(b.sort((x, y) => x - y))];
    function uniq(a) {
        let seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
    let cc = uniq(c.sort((x, y) => x - y));
    
    let ai = 0;
    let ci = 0;
    
    // for big Oh of n time complexity
    for(let e of bb) {
        for(let i = ai; i < aa.length; i ++) {
            if(aa[i] <= e){
                ai ++;
            } else {
                break;
            }
        }
        for(let i = ci; i < cc.length; i ++) {
            if(cc[i] <= e){
                ci ++;
            } else {
                break;
            }
        }
        result += ai * ci;
    }
    
    return result;

}


let a = [1,3,5];
let b = [2,3];
let c = [1,2,3];

console.log(triplets(a,b,c));

