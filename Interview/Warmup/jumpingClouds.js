
function jumpingOnClouds(n) {
    let jumps=[];
    
    for(let i=0; i< n.length+1;i+=2) {
        
        if(n[i] === 1) {
            i -=1;
        }
        jumps.push(n[i]);
        console.log(jumps);

    }
    return jumps.length -1;

}

function jumpingOnClouds2(c) {
    let z = c.join('').split(1);
    //determine which will take two 2 steps
    let j = z.reduce((a,b)=>Math.floor(b.length/2)+a,0);
    //determine which will take 1 step
    let k = z.length - 1; 
    return j+k;
}

let y = [0,1,0,0,0,1,0];

console.log(jumpingOnClouds2(y));
// console.log(jumpingOnClouds(y));

