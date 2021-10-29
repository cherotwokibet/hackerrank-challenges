//Mutates the Array
function rotLeft (a,d) {
    const headIndex = d % a.length;
    //splice mutates the array
    const head = a.splice(0,headIndex);
    a.push(...head);
    return a;
}

//Creates a new Array
function rotLeft2 (a,d) {
    const headIndex = d % a.length;
    const head = a.splice(0,headIndex);
    return a.concat(head);
}





const y=[1,2,3,4,5];

// rotLeft(y,2);
rotLeft2(y,2);
// console.log(rotLeft(y,2));
// console.log(rotLeft2(y,2));
