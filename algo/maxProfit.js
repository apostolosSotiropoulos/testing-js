function maxProfit (stocks) {
  if (stocks.length < 2) return false
  betterStocks = {min: stocks[0], max: stocks[1], profit: stocks[1] - stocks[0], generalMin: stocks[0]}
  bestStocks = stocks.reduce((result, stock, idx) => {
    if (idx == 0) return result
    if ((stock - result.generalMin) > result.profit) {
      result.max = stock
      result.profit = stock - result.generalMin
      result.min = result.generalMin
    }
    if (stock < result.generalMin) result.generalMin = stock
    return result
  }, betterStocks)
  return Object.values(bestStocks).splice(0, 2)
}

console.log(maxProfit([1, 2, 3, 4, 5]) )//[1, 5]);
console.log(maxProfit([2, 1, 5, 3, 4]) )//[1, 5]);
console.log(maxProfit([2, 10, 1, 3]) )//[2, 10]);
console.log(maxProfit([2, 1, 2, 11]) )//[1, 11]);

function foo(ha) {
  ha;
})