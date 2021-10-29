function activityNotifications(exp, d) {
    // count notifications
    let notifications = 0;

    // median position in the array
    // those will be the same for even days
    const leftIdx = Math.floor((d - 1) / 2);
    const rightIdx = Math.ceil((d - 1) / 2);
    let left, right, median;

    // initialize empty counting array with length 
    // equals to max possible expedition value 
    // (plus one to basically ignore 0)
    const count = Array(201).fill(0);
    
    // fill counting array with previous days counts
    for (let i = d - 1; i >= 0; i--) {
        count[exp[i]] += 1;
    }

    // loop through rest
    for (let i = d, len = exp.length; i < len; i++) {
        // The index of count corresponds to the actual expenditures
        // numbers met so far.
        // The extremely smart (and sick) way to find the median is:
        // 1. We start a loop with 2 variables initialized
        // 2. First one (j) (with no effect on the breaking condiftion)
        //    is just incremented by 1 on every iteration.
        // 3. Second one (k) is the breaking condition.
        //    It accumulates the counts on every counting 
        //    array element till it reaches the previously 
        //    calculated leftIndex - count is > 0 only when 
        //    previously indexed by existing expidenture value.
        //    For example count[3] = 2 means we have 
        //    numer 2 times number 3, so it counts as 2 indecies 
        //    increment towards our desired leftIdx.
        // 4. While iterating, "j" variable is incremented by 1 so that
        //    when "k" meets the breaking condition, "j" will be  
        //    the actual value of exp[leftIdx]
        for (let j = 0, k = 0; k <= leftIdx; k += count[j], j++) {
            left = j;
        }

        if (leftIdx === rightIdx) { // median on even array length
            median = left;
        } else { // median on odd array length
            // Same as leftIdx
            for (let j = 0, k = 0; k <= rightIdx; k += count[j], j++) {
                right = j;
            }
            median = (left + right) / 2;
        }
        
        // Compare current value with the median
        // and increment notification count if necessary
        if (exp[i] >= 2 * median) {
            notifications += 1;
        }

        // decrement count of the element removed from 
        // expenditures
        count[exp[i - d]] -= 1;
        // increment count of the current 
        // element (next iteration median calculation)
        count[exp[i]] += 1;
    }
    return notifications;
}
