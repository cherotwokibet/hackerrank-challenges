

function commonChild(s1, s2) {
    // Write your code here
    let arr = [Array(s2.length + 1).fill(0)];
    [...s1].forEach((v1, i) => {
        arr[i + 1] = [0];
        // console.log('arr arr[i + 1] = [0]:-> '+arr);
        [...s2].forEach((v2, j) => {
            // console.log('...s2: '+arr);
            arr[i + 1][j + 1] = v1 === v2 ?
                arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
            // console.log(arr);
        });
    });
    return arr[s2.length][s1.length];

}

//Solution 2

function commonChild2(s1, s2) {
    
    /* Initialize an array to hold a results matrix. 
    Other js solutions in these comments suggest using the Array(length).fill(0) format to initialize the array.
    However, this is unnecessary because JS arrays allow assignment to non-existent indexes.
    
    While it would be nice to be able to use Array(length).fill([]) to create the inner arrays, 
    that implementation would actually fill the outer array with a series of pointers to the same inner array, 
    rather than a series of unique inner arrays. */

    let matrix = []; 

    /* Loop through the indexes of the first string */
    for (let i = 0; i <= s1.length; i++) {
        
        /* We'll create the inner arrays here. So at i = 0, matrix = [[]], and at i = 1, matrix = [[0, 0...,],[]]. 
        Note that we use <= s1.length, rather than the more common < s1.length. 
        This is to populate the first column and first row of the matrix with 0s. 
        This is because each iteration of the algorithm references the previous cells on both the x and y axis. 
        Populating a column and row of zeroes allows us to use the same code s1[0] and s2[0], 
        instead of having to write separate logic for those positions.  */

        matrix[i] = [];
        console.log('matrix i:=>'+i+ ' outer loop: '+matrix);
        
        /* Now we'll loop through the indexes of the second string. 
        Since the problem dictates strings of equal length, 
        we can use s1.length here again. */

        for (let j = 0; j <= s1.length; j++) {
            /* This next line populates the column and row of zeroes.*/
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
                // console.log('  loop i= '+i+ ' or j= '+j+': '+matrix[i][j])
            }
            /* Now we compare s1[i-1] with s2[j-1]. Since j is the inner loop, 
            this will compare the first character of s1 to every character of s2 
            (populating the first non-zero row). 
            The next i loop will do the same for the second character of s1, and so on. 
            We're using i-1 and j-1 instead of i to account for the column and row of 0s. 
            If the characters match, then we set matrix[i][j] = matrix[i-1][j-1] + 1. 
            This prevents us from counting any character in either string multiple times, 
            because we increment the total from before either character was checked.
            
            At i = 1 or j = 1, we know that matrix[i-1][j-1] will always return 0 because of the row and column of zeroes.*/ 
            else if (s1[i - 1] === s2[j - 1]) {
                matrix[i][j] = matrix[i-1][j-1] + 1;
                // console.log('s1[i - 1] === s2[j - 1] : => '+matrix);
            } 
            /* If the characters don't match, we set the current cell to the larger previous total between 
            the current row and the current column. 
            
            For a visual explanation of why the matrix works the way it works, 
            this video provided by user ejubkadrix elsewhere in these comments is a great primer:  
            https://www.youtube.com/watch?v=NnD96abizww */ 

            else {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
                // console.log('else: '+matrix);
            }
        }
    }
    /* When both loops have been completed, the last value of the last inner array is the answer. */ 
    return matrix[s1.length][s1.length];
}

const s1 = 'ABCD';
const s2 = 'ABDC';

console.log(commonChild2(s1,s2));
