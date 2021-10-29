

function solve(arr) {
    // solve here
    arr.push(0);
    // console.log('arr: '+arr);
    const n = arr.length;
    const windowSizes = new Array(arr.length).fill(0);
    // console.log('windowSizes: '+windowSizes);
    const positions = [];
    let i = 0;
    while (i < n) {
        if (!positions.length || arr[positions[positions.length-1]] <= arr[i]) {
            positions.push(i++);
            console.log(positions);
        } else {
            const top = positions.pop();
            console.log('top: '+top);
            const range = positions.length ? (i - positions[positions.length-1] - 1) : i;
            if (range < 1 || range > arr.length || arr[top] === 0) continue;
            windowSizes[range-1] = Math.max(windowSizes[range-1], arr[top]);

        }
    }
    for (let i = n - 2; i >= 0; i--) {
        windowSizes[i] = Math.max(windowSizes[i], windowSizes[i+1]);
    }
    windowSizes.pop();
    return windowSizes;
}


//Solution 2

function solve2(arr) {
    // solve here
    const n = arr.length,
    left = Array(n), right = Array(n),
    ans = Array(n + 1).fill(-Infinity);
    // console.log(ans);
    
    arr.forEach((arr_i, i) => {
        let j = i - 1, k = i + 1;
        while(arr[j] >= arr_i) {
            // console.log('arr[j]: '+arr[j]);
            j--;
        }
        while(arr[k] >= arr_i) {
            // console.log('arr[k]: '+arr[k]); 
            k++;
        }
        left[i] = j, right[i] = k;
        // console.log('left: '+left);
    });
    
    arr.forEach((arr_i, i) => {
        const len = right[i] - left[i] - 1;
        console.log(len);
        ans[len] = Math.max(ans[len], arr_i);
        console.log(ans);
    });

    for (let i = n - 1; i >= 1; i--) {
        ans[i] = Math.max(ans[i], ans[i + 1]);
    }

    ans.shift();
    return ans;
    // return ans.shift(), ans;
}


const z = [3,5,4,7,6,2];

console.log(solve(z));

