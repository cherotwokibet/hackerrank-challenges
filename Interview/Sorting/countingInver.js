

function countInversions(arr) {
    // Write your code here
    let count=0;
    mergesort(arr);

    function mergesort(myar) {
        if (myar.length <=1) return myar;
        // console.log('Myar'+myar);
        let mid = Math.floor(myar.length/2);
        const left = mergesort(myar.slice(0,mid));
        // console.log('Left: '+left);
        const right = mergesort(myar.slice(mid));
        // console.log('Right: '+right);
        return merge(left,right);
    }

    function merge(arr1,arr2) {
        let i=0;
        let j=0;
        const results=[];
        // console.log('Lets merge arr1: '+arr1+' and arr2: '+arr2);
        while ((i <arr1.length) && (j < arr2.length)) {
            if (arr1[i] <= arr2[j]) {
                results.push(arr1[i]);
                i++;
    
            } else {
                results.push(arr2[j]);
                j++;

                // and here's the extra line to get the count
                count=count + (arr1.length-i);
                // console.log('count: '+count+' + ((arr1.length: '+arr1.length+' ) - (i: '+ i+'))');    

            }
        }
        while (i<arr1.length) {
            results.push(arr1[i]);
            i++;
        }
        while (j<arr2.length) {
            results.push(arr2[j]);
            j++;
        }
        // console.log('Results: '+results);
        return results;
    }

    return count;

}
//---------------------//
//Solutions 2 
//---------------------//

// function countInversions2(arr) {
//     let count = 0;
//     function swap(arr1, arr2) {
//         let i = 0;
//         let j = 0;
//         let mergedArr = [];
//         let remainder;
//         while (i !== arr1.length && j !== arr2.length) {
//             if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
//                 mergedArr.push(arr1[i]);
//                 i++;
//             } else {
//                 mergedArr.push(arr2[j]);
//                 count += (arr1.length - i);
//                 j++;
//             }
//         }
//         remainder = i >= j ? arr2.slice(j) : arr1.slice(i);
//         return mergedArr.concat(remainder);
//     }

//     function mergeSort(arr) {
//         if (arr.length <= 1) return arr;
//         let middle = Math.floor(arr.length / 2);

//         let left = mergeSort(arr.slice(0, middle))
//         let right = mergeSort(arr.slice(middle, arr.length))

//         return swap(left, right);
//     }
    
//     mergeSort(arr);
    
//     return count;
// }

let p = [2,1,3,1,2];
let x = [10,24,76,73];

console.log(countInversions(p));
