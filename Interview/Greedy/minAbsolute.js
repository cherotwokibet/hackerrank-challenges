
function minimumAbsoluteDifference(arr) {
    // Write your code here
    // Sort
    arr.sort();
    console.log(arr);

    let minDiff;

    // Loop through the consecutive pairs, if 0 return, else set min diff
    //arr.length -1 so that arr[i+1] doesn't exceed arr's length to NaN/undefined    
    for (let i = 0; i < arr.length-1; i++) {
        let absDiff = Math.abs(arr[i+1] - arr[i]);
        // console.log('absDiff: '+absDiff);
        if (!minDiff || absDiff < minDiff) minDiff = absDiff;
        // console.log('minDiff: '+minDiff);
        if (minDiff === 0) return 0;
    }

    return minDiff;

}

function minimumAbsoluteDifference2(arr) {
    let smallest = Infinity;
    arr.sort((a, b) => {
      smallest = Math.min(smallest, Math.abs(a - b));
    //   console.log('a: '+a+' b: '+b);
    //   console.log('Smallest: '+smallest);
    //   console.log('a - b :'+(a-b));
      return a - b;
    });

    return smallest;
}

const a = [3,-7,0];

console.log(minimumAbsoluteDifference(a));
