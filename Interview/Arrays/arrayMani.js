
function arrayManipulation(n,queries) {
    let array = [0] * (n + 1);

    queries.forEach(query => {
        let a = query[0]-1;
        let b = query[1];
        let k = query[2];
        array[a] +=k;
        array[b] -=k;
    });

    let max_value = 0;
    let running_count = 0;

    for(let i=0; i < array.length; i++) {
        running_count += i;
        if(running_count > max_value) {
            max_value = running_count;
        }
    }

    return max_value;

}

function arrayManipulation2(n,queries) {
    // Write your code here
    let max = 0;
    const params = [];
    
    for(let q=0; q<queries.length; q++){
        
        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];
        
        params.push({
            key: qstart,
            val: qval
        });
        
        params.push({
            key: qend,
            val: -qval
        });
    }
    //sort the parameters by key
    params.sort((item1, item2) => {
        if(item1.key === item2. key){
            return item2.val - item1.val;
        }
        
        return item1.key - item2.key;
    });
    
    let sum = 0;
    
    for(let i=0; i<params.length; i++){
        const param = params[i];
        sum += param.val;
        
        if(sum > max){
            max = sum;
        }
    }

    return max;
}

let y = 10;
let queries = [1,5,3,4,8,7,6,9,1];

console.log(arrayManipulation(y,queries));

