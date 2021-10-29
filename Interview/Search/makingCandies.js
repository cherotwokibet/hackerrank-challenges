
function minimumPasses(m, w, p, n) {
    // Write your code here
    let passes = 0;
    let skips = 0;
    let candies = 0;
    let purchased = 0;
    let capability = 0;
    let minimumPasses = Infinity;

    while (true) {
        passes++;
        capability = m * w;
        candies += capability;

        //If we don't do any purchases and we simply keep manufacturing - how many passes will it take?
        minimumPasses = Math.min(passes + Math.ceil((n - candies) / capability), minimumPasses);
        
        //If we've produced enough, or we've exceeded an already calculated minimum, then stop
        if (passes >= minimumPasses) break;
        if (candies >= n) break;

        //If we can afford to purchase, then purchase
        if (candies >= p) {
            purchased = Math.floor(candies / p);
            candies -= (purchased * p);
            purchased += m + w;
            m = Math.floor(purchased / 2);             
            w = purchased - m;
        } else {
            //Otherwise, calculate how long we will need to manufacture for in order to purchase and skip forward
            skips = Math.ceil((p - candies) / capability) - 1;
            passes += skips;
            candies += capability * skips;
        }
    }

    return minimumPasses;
}


// Solution 2

// Has problem solution
// Time limit exceeded, optimize

function minimumPasses2(m, w, p, n) {
    // Write your code here
    var c = 0;
        var co = 0;
        while(c < n){
            c = m*w;
            if(c>p){
                if(m>w){
                    w = w+c/p;
                }
                else{
                    m = m+c/p;
                } 
            }
            ++co;
        }
        return co;
}


console.log(minimumPasses(3,1,2,12));
