function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0;
    let valleyCounter = 0;
    
    for (let i = 0; i < steps; i++) {
        //update the current level
        if (path[i] === 'U') {
            altitude++;
            //When you step U(up) then altitude is 0
            //you have come out of a valley 
            if (altitude == 0) {
                valleyCounter++;
            }
        } else {
            altitude--;
        }
        
        
    }
    
    return valleyCounter;

}

const p = 10;
const y = 'UUUUDDDDDU';

console.log('Valleys : '+countingValleys(p,y));

