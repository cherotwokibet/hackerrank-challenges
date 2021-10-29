

function superDigit(n, k) {
    // Write your code here
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}


//Solution 2 


function superDigit(n, k) {
    // Write your code here
    if (n < 10) {
        return n;
    }

    return superDigit(
    n
      .toString()
      .split('')
      .reduce((sum, num) => sum + (num | 0), 0) * k,
    1);
}


//Solution 3

function superDigit(n, k) {
    // Write your code here
    return n.length === 1 ? n : superDigit(String(k *
    [].reduce.call(n, (num, ch) => num + +ch, 0)), 1);
}

//Solution 4

function superDigit(n, k) {
    if(n.length === 1) return n;
    let num = 0;
    for(const ch of n) num += Number(ch);
    return superDigit(String(num * k), 1);
}


//Solution 5


function superDigit(n, k) {
    // Write your code here
    //Less than 10 we found our solution
    if (parseInt(n) < 10) return n;
        
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    
    sum *= k; // instead of repeating the string, multiply by k the summarized value

    return superDigit(sum.toString(), 1); //after first round k is 1.
}

