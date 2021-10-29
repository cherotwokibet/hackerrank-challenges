
//Solution 1

function whatFlavors(cost, money) {
    // Write your code here
    const flavors = {};
    for (let index = 0; index < cost.length; index++) {
        console.log(index);
        if (flavors[money - cost[index]] !== undefined) {
            console.log(`${flavors[money - cost[index]]} ${index + 1}`);
        } else {
            flavors[cost[index]] = index + 1;
        }

    }

}

//Solution 2

function whatFlavors2(cost, money) {
    // Write your code here
    const map = new Map();
    for (let i = 0; i < cost.length; i++) {
        var target = money - cost[i];
        if (map.has(target)) {
            console.log(map.get(target), i + 1);
            break;
        }
        map.set(cost[i], i + 1);
    }

}

//Solution 3 

function whatFlavors3(cost, money) {

    const cache = {};

    // fill cache with {[cost] : [index, ...]} pairs
    // in case if there are repeating values
    for (let i = 0; i < cost.length; i++) {
        const value = cache[cost[i]] || [];
        value.push(i);
        cache[cost[i]] = value;
    }

    // console.log(cache);
    
    const result = [];

    // loop over the costs stored in keys of the cache
    for (const key in cache) {
        // calc missing value
        const diff = money - (+key);
        if (diff in cache) {
            let i = 0;
            let j = 0;
            // if it's a repeating value
            // it's stored in the seconds position
            if (diff == key) j = 1;
            result.push(cache[key][i] + 1);
            result.push(cache[diff][j] + 1);
            break;
        }
    }

    const [min, max] = [Math.min(...result), Math.max(...result)];
    return console.log(min, max);

}


let y = [2,1,3,5,6];

whatFlavors(y,5);

