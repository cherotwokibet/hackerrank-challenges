
//Solution 1

function getMinimumCost(k, c) {
	let price = 0;
	let prevPurchases = 1;
	let friends = k;

	c.sort((a, b) => a - b);

	for (let i = c.length - 1; i >= 0; i--) {
		price += prevPurchases * c[i];
		friends--;
		if (friends === 0) {
			prevPurchases++;
			// friends = k;
		}
	}

	return price;
}


//Solution 2

function getMinimumCost(k, c) {
    // Create a 2D array holding purchase order for each friend
    let purchases = new Array(k).fill(0).map(x => [])

    // Sort flowers from most expensive to cheapest
    c.sort((a,b) => b-a)

    // Distribute purchases evenly between friends
    for (let i = 0, l = c.length; i < l; i++) purchases[i%k].push(c[i])

    // Calculate and return sum of all purchases
    return purchases.reduce( (total_cost, friend_total) => {
        return total_cost + friend_total.reduce( (total, cost, i) => {
            return total + (i + 1) * cost
        }, 0)
    }, 0)

}


//Solution 3

const getMinimumCost3 = (k, c) => c.sort((a,b) => b-a).reduce((a,v,i) => a + (Math.floor(i/k) + 1) * v, 0);


const c = [1,3,5,7,9];

console.log(getMinimumCost(3,c));
