function socksMerchant (n,arr) {
    let res=0;
    arr.sort();
    for(let i=0;i<n;i++) {
        if(arr[i] == arr[i+1]) {
            i++;
            res++;
        }
    }
    return res;
}

function socksMerchant2 (n,ar ) {
    let ones = {}, pairs = 0;
    for (var i = 0; i < n; i++) {
        if (ones.hasOwnProperty(ar[i])) {
            pairs++;
            delete ones[ar[i]];
        } else {
            ones[ar[i]] = 0;
        }
    }
    return pairs;
}

function socksMerchant3(arr) {
    let ones = {};
    return arr.reduce((pairs,i)=>{
        if(ones[i]) {
            delete ones[i];
            return pairs + 1;
        } else {
            ones[i] = true;
            return pairs;
        }
    },0);
}

let p = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// console.log(socksMerchant2(9,p));
console.log(socksMerchant3(p));

