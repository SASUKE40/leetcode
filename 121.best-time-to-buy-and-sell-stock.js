121.best-time-to-buy-and-sell-stock/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const curPrice = prices[i];
    if (curPrice > prices[i - 1]) {
      profit = Math.max(profit, curPrice - min);
    } else {
      min = Math.min(min, curPrice);
    }
  }
  return profit;
};
// @lc code=end
