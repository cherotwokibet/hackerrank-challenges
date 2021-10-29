
// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    // if there's 1 element, we can return Math.max(f(0)=0, f(-1)=0 + el[0]);
    // if there's 2 elements -> Math.max(f(1), f(0) + el[1]);
    // if there's 3 elements -> Math.max(f(2), f(1) + el[2]);
    // if there's 4 elements -> Math.max(f(3), f(2) + el[3]);
    let curr = 0, prev = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        [prev, curr] = [
            curr,
            Math.max(curr, prev + arr[i])
        ];
        console.log([prev,curr]);
    }
    return curr;
}


// Solution 2

function maxSubsetSum2(arr) {
    if (arr.length === 0) return 0;
  
    let prev1 = 0;
    let prev2 = 0;
  
    for (let cur of arr) {
        let temp = prev1;
        prev1 = Math.max(prev1, cur + prev2);
        prev2 = temp;
    }
    return prev1;

}

//Solution 3 

// Complete the maxSubsetSum function below.
function maxSubsetSum3(arr) {
    let maxArr = [];
    maxArr.push(0);
    maxArr.push(arr[0]);
    for(let i=2;i<=arr.length;++i){
        maxArr.push(Math.max(maxArr[i-2] + arr[i-1],maxArr[i-1],arr[i-1]));
    }
    return maxArr.pop();

}

//Solution 4

// Complete the maxSubsetSum function below.
function maxSubsetSum4(arr) {
    let back1 = 0, back2 = 0;
    
    for(let i=0; i<arr.length; ++i) {
        [back1, back2] = [Math.max(arr[i]+back2, back1), back1];
    }
    
    return back1;
}

// Solution 5

function maxSubsetSum5(arr) {
    let dp = [];
    let len = arr.length;
    while (len > 0) { 
        dp.push(0);
        len--;
    }
    dp[0] = arr[0];
    dp[1] = Math.max(arr[1], dp[0])
    for (let i = 2; i < arr.length; i++) { 
        dp[i] = Math.max(arr[i], dp[i - 1], arr[i] + dp[i - 2])
    }
    return dp[arr.length-1];

}


let m = [3,5,-7,8,10];

maxSubsetSum(m);

