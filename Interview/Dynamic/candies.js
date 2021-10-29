

function candies(n, arr) {
    // Write your code here
    const size = arr.length;
    const arrLTR = [];
    console.log(arr);
    for(let i=0;i<size;i++) {
        let curr = arr[i];
        let last = arr[i-1];
        if(i==0) {
            arrLTR[i] = 1;
        }else if(curr > last) {
            arrLTR[i] = arrLTR[i-1]+1;
        }else {
            arrLTR[i] = 1;
        }
    }

    const arrRTL = [];
    for(let j=size-1;j>=0;j--){
        let curr = arr[j];
        let last = arr[j+1];
        if(j===size-1){
            arrRTL[j] = 1;
        }else if(curr > last){
            arrRTL[j] = arrRTL[j+1]+1;
        }else{
            arrRTL[j] = 1;
        }
    }
    console.log(arrLTR);
    console.log(arrRTL);
    let sum = 0;
    for(let k=0;k<size;k++){
        sum+= Math.max(arrLTR[k],arrRTL[k]);
    }
  return sum;

}

let c = [2,4,2,6,1,7,8,9,2,1];

// candies(10,c);

console.log(candies(10,c));
