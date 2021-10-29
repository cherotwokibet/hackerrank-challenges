
function countFrom(string,end) {
    let total = 0;
    for(let i=0; i < end;i++) {
        if(string[i] ==='a') total++;
    }
    return total;
}

function repeatedString2(string,n) {
    const numberOfAsInString = countFrom(string,string.length);
    const timesStringIsRepeated = Math.floor(n/string.length); 
    const remainder = n % string.length;
    const numberOfAsInStringRemainder = countFrom(string,remainder);
    return numberOfAsInString * timesStringIsRepeated + numberOfAsInStringRemainder;
}


function repeatedString(s, n) {
    // Write your code here
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    counter = counter * fracNumber;
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;
}


const y = 'abac';

console.log(repeatedString(y,10));
