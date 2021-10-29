
function primality(n) {
    // Write your code here
    if((n==1)|(n%2)==0 && n!=2 ){
        return 'Not prime';
    }

    for(var i = 3; i<=Math.sqrt(n);i+=2){
        console.log(i);
        if((n%i)==0){
                return 'Not prime';
        }
    }

    return 'Prime';
}

//Solution 2

function primality(n) {
    // Write your code here
    let sqrt = Math.sqrt(n),
        prime = true;
    for(let i = 2; i <= sqrt; i += 1) {
        if(n % i === 0) {
            prime = false;
            break;
        }
    }
    return prime && n > 1 ? 'Prime': 'Not prime';
}


//Solution 3


function primality(n) {
    // Write your code here
    if(n !== 2 && n % 2 === 0 || n === 1){
       return 'Not prime';
    }
    for(let i=3; i <= Math.sqrt(n); i=i+2){
        if(n % i === 0){
           return 'Not prime';
        }
    }
    return 'Prime';
}

