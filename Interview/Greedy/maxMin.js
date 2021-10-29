function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    // console.log(arr);
    let min = Infinity, curr;
    for(let i = 0; i <= arr.length - k; i++) {
        // console.log(curr);
        curr = arr[i + k - 1] - arr[i];
        if(min > curr) min = curr;
    }
    return min;
}


//Solution 2

function maxMin2(k, arr) {
    // Write your code here
    let n = arr.length, min = Infinity;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < n - k + 1; i++) {
        min = Math.min(arr[i + k - 1] - arr[i], min);
    }
    return min;

}


const y = [10,100,300,200,1000,20,30];

console.log(maxMin(3,y));
