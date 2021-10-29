

function pairs(k, arr) {
    // Write your code here
    let count = 0;

    // arr = arr.sort(function(a, b){return a - b});
    arr = arr.sort((a,b) => a-b);
    console.log(arr);

    for(let i=0; i < arr.length; i++){

        let j = i+1;

        while(j < arr.length) {
            let diff = arr[j] - arr[i];

            if (diff === k) {
                count++;
                j++;
            } else {
                j++;
            }
        }
    } 
    return count;
}

let arr = [1,5,3,4,2];
console.log(pairs(2,arr));

