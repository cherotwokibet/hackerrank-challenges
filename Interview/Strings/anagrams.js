

function makeAnagram(a, b) {
    // Write your code here
    let counter = {};
    let total = 0;

    Array.from(a).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]++;
        // console.log(counter);
    });

    Array.from(b).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]--;
        console.log(counter);
    });

    Object.keys(counter).forEach(k => {
        if (counter[k] !== 0) {
            total += Math.abs(counter[k]);
        }
    });

    return total;

}

const a = 'cde';
const b = 'abc';

console.log(makeAnagram(a,b));

