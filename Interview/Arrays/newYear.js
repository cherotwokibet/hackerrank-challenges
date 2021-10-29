
//bribe more than 2 chaotic
//can bribe only directly infront to swap
//still wear original sticker

//-> Bribing the person in front of you is the only way to go forward.
//->Instances of numbers greater than you in front of you = Bribe count
//->any person who is more than 2 positions ahead of their initial position cannot be there


function minimumBribes(q) {
    let bribes=0;

    for (let i = q.length; i >= 0; i--) {
        if (q[i - 1] - i > 2) {
            return `Too chaotic`;
        }
        for (let j=i-2; j>=Math.max(q[i-1]-2,0); --j) {  
            if (q[j] > q[i-1]) {
                bribes++;
            };
            
        }
        
    }
    console.log(bribes);
    return bribes;
}


function minimumBribes2(q) {
    let bribeCount=[];
    let high = 0;

    for (let i=0; i < q.length; i++) {
        let val = q[i];
        bribeCount[val] = 0;
        // update the highest value encountered
        high = Math.max(val,high);

        if(val < high) {
            //if current value < high value, 
            //increment value for all bribeCount indices > val
            console.log(bribeCount);
            for (let j = val+1; j < bribeCount.length;j++) {

                bribeCount[j]++;
                if(bribeCount[j] > 2) {
                    console.log('Too chaotic');
                    return;
                }
            }
        }
        
    }
    //sum
    const sum = bribeCount.reduce((a,b) => a+b,0);
    console.log(sum);

}

let x = [2,1,5,4,3];
let y = [1,2,3,5,4];

// minimumBribes(x);
// minimumBribes(y);
minimumBribes2(x);
// minimumBribes2(y);
// console.log(minimumBribes(y));

