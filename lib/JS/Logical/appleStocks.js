// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

// const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)


function getMaxProfit(stockPrices){
    if(stockPrices.length < 2){
        throw new Error('Getting a profit requires at least 2 prices');
    }

    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];

    for(let i=0; i<stockPrices.length; i++){
        let currentPrice = stockPrices[i];

        let potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);

        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit
}


// test;
let stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));
