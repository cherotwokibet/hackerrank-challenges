
function countSwaps(a) {
    // Write your code here
    let swaps = 0;
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
                //OR
                // let temp = a[j];
                // a[j] = a[j+1];
                // a[j+1] = temp;
                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`) 
    console.log(`Last Element: ${a[n - 1]}`) 
}

const a = [6,4,1];
const b = [1,2,3];
const c = [4,3,2,1];

console.log(countSwaps(c));

