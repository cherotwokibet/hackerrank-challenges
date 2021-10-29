
//Solution 1

// Complete the minTime function below.
function minTime(machines, goal) {
    let faster = Math.min(...machines);
    let slower = Math.max(...machines);

    let lowerBound = Math.ceil((goal / machines.length) * faster);
    let upperBound = Math.ceil((goal / machines.length) * slower);
    // console.log('lower: '+lowerBound+' upper: '+upperBound);

    while(lowerBound < upperBound){
        let day = Math.floor((upperBound + lowerBound) / 2);
        // console.log('Updated day: '+ day);
        let sum = machines.reduce((xs, x) => xs + Math.floor(day / x), 0);
        // console.log('sum: ' + sum);
        if (sum < goal) {
            lowerBound = day+1;
            // console.log('new lower: '+lowerBound);
        } else if (sum >= goal) {
            upperBound = day;
            // console.log('new upper: '+upperBound);
        }
    }

    return lowerBound;
}


//Solution 2

function minTime2(machines, goal) {
    let gen=0    
    let day = 0;
    let i =0;
    while(gen<goal) {
        gen=0;day++;
        for( i = machines.length; i--;) {
            console.log(i);
            gen=gen+Math.floor(day/machines[i])
        }
    }
    return day;
}


// Solution 3

function calculateCost(mid, machines) {
    let totalCost = 0;
    for(let i = 0; i < machines.length; i++) {
        totalCost += parseInt(mid / machines[i]);
    }
    return totalCost;
}

// Complete the minTime function below.
function minTime3(machines, goal) {
    let lowerbound = 0, 
        upperbound = Math.max.apply(null,machines) * goal, 
        cost = 0,
        mid = 0;
    while(lowerbound < upperbound) {
        mid = parseInt((lowerbound + upperbound) / 2);
        cost = calculateCost(mid, machines);
        
        if(cost >= goal) {
            upperbound = mid;
        } else {
            lowerbound = mid + 1;
        }
    }
    return upperbound;

}


let m = [4,5,6];

console.log(minTime2(m,12));


