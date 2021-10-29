
function flippingBits(n) {
    // Write your code here
    let bNum = n.toString(2);
    let arr = Array.from({ length: 32 }).fill("0");
    let _32bit = arr.slice(0, arr.length - bNum.length).concat(...bNum);
    return parseInt(_32bit.map((v) => (v == "0" ? 1 : 0)).join(""),2);

}

//Solution 2

function flippingBits(n) {
    // Write your code here
    let str = [].reduce.call(n.toString(2),
    (s, ch) => s + (ch === '1' ? '0' : '1'), '');
    while(str.length < 32) str = '1' + str;
    return parseInt(str, 2);

}

//Solution 3

function flippingBits(n) {
    // Write your code here
    const raw = n.toString(2), start = 32 - raw.length;
    for(var i = 0, str = ''; i < 32; i++) {
        str += i < start || raw[i - start] === '0' ? '1' : '0';
    }
    return parseInt(str, 2);
}

//Solution 4

function flippingBits(n) {
    // Write your code here
    let a = [...n.toString(2)].map(ch => ch === '1' ? '0' : '1');
    a = new Array(32 - a.length).fill(1).concat(a);
    return parseInt(a.join(''), 2);
}


//Solution 5


function flippingBits(N) {
    // Write your code here
    let a = Array(32).fill(0), i = 0, result = 0;
    while(N > 0) {
        a[i] = N % 2;
        N = parseInt(N / 2);
        i++;
    }
    i = 0;
    while(i < a.length) {
        a[i] = (a[i] == 1) ? 0 : 1;
        result += (2**i * a[i]);
        i++;
    }
    return result;
}
