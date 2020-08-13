/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0
    let maxProfit = 0,
        minPrices = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrices) minPrices = prices[i]
        if (prices[i] - minPrices > maxProfit) maxProfit = prices[i] - minPrices
    }
    return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))