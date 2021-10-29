//matches any string that begins and ends with same vowel

function regexVar(x) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/;

    return x.match(re) ? true : false;
}

const a = 'abcdo';
const b = 'abcda';

console.log(regexVar(b));

