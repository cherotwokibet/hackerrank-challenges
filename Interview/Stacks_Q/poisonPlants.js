

function poisonousPlants(p) {
    // Write your code here
    let copyP = p;
    let stackPlants = [];
    
    let delCount = 0;
    let circulate = 0;
    
    while(true) {
        delCount = 0;
        // stackPlants = [];
        
        for (let ele of copyP) {
            if(stackPlants.length && (stackPlants[stackPlants.length - 1] < ele)) {
                // console.log(stackPlants[stackPlants.length - 1]);
                stackPlants.push(ele);
                // console.log('ele: '+ele);
                copyP = copyP.filter((item) => {
                    return item !== ele;
                });
                // console.log('copyP: '+copyP);
                delCount += 1; 
            }
            else {
                stackPlants.push(ele);
            }
            // console.log('stackPlants: '+stackPlants);
        };
        
        if (delCount == 0){
            break;
            // return circulate;
        }
        
        else { // if delCount > 0
            circulate += 1;
        }
        
    }
    return circulate;
}


// Solution 2

function poisonousPlants2(p) {
    let nod = 0;
    let oStack = new Stack(p.length);
    let tStack = new Stack(p.length);

    p.forEach((e, i) => oStack.push(i + 1, e))
    while(true) {
       
        let rStack = pastesiging(oStack, tStack);
        if (tStack.isEmpty()) {
            break;
        }
        oStack = new Stack(rStack.max);
       
        while(!rStack.isEmpty()) {
            let tempRStackPop = rStack.pop();
            oStack.push(tempRStackPop.i, tempRStackPop.p);
             
        }
        tStack = new Stack(oStack.max);
        nod++
    }
    return nod;
}


// Solution 3

function poisonousPlants3(plants) {
    
    var maxDaysAlive = 0;
    var stack = [];
    // We keep in the stack the possible
    // killers for plants that we haven't seen yet.
    
    for (var i = 0; i < plants.length; i++){
        var daysAlive = 0; 
        // Number of days the plant[i] will survive

        while(stack.length > 0 && plants[i] <= stack[stack.length - 1].plant)
            daysAlive = Math.max(daysAlive, stack.pop().days); 
        // The daysAlive for plant[i] is the max
        // days of all the plants greater than plant[i]
        // that are in the stack (possible killers) because
        // they all need to die before plant[i] dies.
        // Later we add 1 because it dies after the
        // other plants have died.
        
        
        // when plant[i] is the minimum seen until now.
        // It will never die.
        if (stack.length === 0) 
            daysAlive = 0;
            
            
        // plant[i] will die, because it exited the while
        // loop and a lower plant was found
        else 
            daysAlive += 1;
        
        maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        
        // plant[i] is a possible killer because there 
        // may be plants greater than this that we have 
        // not seen yet
        stack.push({ 
            plant: plants[i],
            days : daysAlive
        });
    }
    // console.log(maxDaysAlive);
    return maxDaysAlive;
}



const z = [6,5,8,4,7,10,9];

console.log(poisonousPlants3(z));

