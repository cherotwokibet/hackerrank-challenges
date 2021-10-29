
//Each toy can be purchased only once


//k-budget


function maximumToys (prices,k) {
    let sum = 0;
    let counter = 0;
    let sortedPrices = prices.sort((a,b) => a-b);

    for (let i=0; i < sortedPrices.length; i++) {
        if(sortedPrices[i] < k) {
            sum += sortedPrices[i];
            if (sum <= k) {
                counter++;
            } else {
                break;
            }
        }
    }

    console.log(counter);

}

maximumToys([1,12,5,111,200,25,10],50)

