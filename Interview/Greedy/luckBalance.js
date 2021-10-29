
//Solution 1

function luckBalance(k, contests) {
    contests.sort((a,b) => b[0] - a[0]);
    let luck = 0;
    console.log(contests);

    for (let c of contests) {
        // console.log(c[1]);
        if (c[1] === 0) luck += c[0];
        else if (k > 0) {
            luck += c[0];
            k--;
        } else luck -= c[0];
    }

    return luck;
}

//Solution 2

function luckBalance2(k, contests) {
    // Write your code here
    let important = contests.filter(ar => ar[1] === 1).length;
    let sumAll = contests.reduce((a, b) => a+b[0],0);
    let sorted = contests.sort((a, b) => a[0] - b[0])
    let win = important-k >=0 ?important-k : 0 
    let min = 0
    for(let i=0;  i<sorted.length; i++){
        if(win === 0) break;
        if(sorted[i][1] === 0)continue;
        min += sorted[i][0];
        win--
    }
    return sumAll - (2*min);

}

//Solution 3

function luckBalance3(k, contests) {
    let important = contests.filter((v) => v[1] == 1);
    important.sort((a, b) => a[0] - b[0]);
    let arr = important.concat(contests.filter((v) => v[1] == 0));
    return arr.reduce((a, v, i) => {
        return i < important.length - k ? a - v[0] : a + v[0];
    }, 0);
}


const con = [[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]];

console.log(luckBalance2(3,con));

// console.log(con);
