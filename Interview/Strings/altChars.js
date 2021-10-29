
function alternatingCharacters(s) {
    // Write your code here
    let deletions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) deletions++;
    }

    return deletions;

}

//Solution 2 

function alternatingCharacters2(s) {
    const multiples = s.match(/(.)+?(?!\1)/g);
    return multiples.reduce((a, c) => a + c.length - 1, 0);
}


let p = 'AABAAB';
let y = 'AAAA';

console.log(alternatingCharacters(y));
