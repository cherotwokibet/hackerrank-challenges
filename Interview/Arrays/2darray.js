function hourGlass (arr) {
    const maxX=3;
    const maxY=3;
    let total = -63;
    
    //begin at y ==0
    for (let y=0; y<=maxY;y++) {
        for (let x=0;x<=maxX;x++) {
            //sum the bottom of hourglass
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];

            //get the middle of hourglass
            sum += arr[y+1][x+1];

            //sum the top of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2];

            //don't store result improve space O(n)

            if(total < sum) total = sum;
        }
    }

    return total;

}

function hourGlass2(arr) {
    let max=-63;
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k=0; k < 3;k++) {
                sum+= arr[i][j+k];
                sum+= arr[i+2][j+k];
            }
            if(sum > max) max = sum;
        }
    }
    return max;
}

let y=[111000];

console.log(hourGlass(y));
// console.log(hourGlass2(y));

