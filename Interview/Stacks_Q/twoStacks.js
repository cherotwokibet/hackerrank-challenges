
function processData(input) {
    //Enter your code here
    //Enter your code here
    const fifo = [];
    const lifo = [];
    const inputArr = input.match(/[^\r\n]+/g);
    let result = ''
    // console.log(inputArr);
    for (let i = 1; i < inputArr.length; i++) {
        const type = Number(inputArr[i][0]);
        if (type === 1) {
            const value = Number(inputArr[i].slice(2)); 
            fifo.push(value);
            lifo.unshift(value);
        } else if (type === 2) {
            fifo.shift();
            lifo.pop();
        } else if (type === 3) {
            result += fifo[0].toString() + '\n';
        }
    }
    console.log(result);
} 


//Solution 2 

function processData2(input) {
    //Enter your code here
    var is = input.split("\n");
    var giver = [];
    var taker = [];
    for (var i = 1; i < is.length; i++) {
        if (is[i][0] === "1") {
            var value = is[i].slice(1).trim();
            taker.push(value);
        }
        if (is[i][0] === "2") {
            if (giver.length > 0) giver.pop();
            else {
                while (taker.length !== 0) giver.push(taker.pop());
                giver.pop();
            }
        }
        if (is[i][0] === "3") {
           if (giver.length > 0) console.log(giver[giver.length-1]);
            else {
                while (taker.length !== 0) giver.push(taker.pop());
                console.log(giver[giver.length-1]);
            }
        }
    }
} 


//Solution 3

function processData2(input) {
    //Enter your code here
    //Enter your code here
    let queue = [];
    input = input.match(/.+\b/g);

    for (let i=1; i<input.length; i++) {  
        let re = /(\d+)\s(\d+)\b/.exec(input[i]);
        if (re) {
            queue.push(re[2]);
        } else if (input[i] == 2) {
            queue.shift();
        } else {
            console.log(queue[0]);
        }
    }
} 

