
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } 
    throw Error (a ? "Negative Error" : "Zero Error");
}


function isPositive2(a) {
    switch (Math.sign(a)) {
        case -1:
            throw new Error('Negative Error');
        case 0:
            throw new Error('Zero Error');
        case 1:
            return "YES";
    }
}

console.log(isPositive2(5));
