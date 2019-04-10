// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

//     Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Not 7 - 1 = 6, as selling price needs to be larger than buying price.
//     Example 2:

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.

// We'll greedily update minPrice and maxProfit, so we initialize
// them to the first price and the first possible profit
// Start at the second (index 1) time
// We can't sell at the first time, since we must buy first,
// and we can't buy and sell at the same time!
// If we started at index 0, we'd try to buy *and* sell at time 0.
// this would give a profit of 0, which is a problem if our
// maxProfit is supposed to be *negative*--we'd return 0.
// See what our profit would be if we bought at the
// min price and sold at the current price
// Update maxProfit if we can do better
// Update minPrice so it's always
// the lowest price we've seen so far


// Time O(n) ans Space O(1)
function maxProfit(stockPrices){
    if(stockPrices.length < 2) return 0;

    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];

    for(let i=1; i<stockPrices.length; i++){
        const currentPrice = stockPrices[i];

        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(potentialProfit, maxProfit);

        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit != -1 ? maxProfit : 0;
}
  


// test

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

