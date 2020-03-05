/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * Todo: Euler https://oi-wiki.org/math/sieve/
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let p = new Array(n + 1);
  let prime = [];
  for (let i = 2; i < n; i++) {
    if (!p[i]) {
      prime.push(p);
      let j = 2;
      while (j * i < n) {
        p[j * i] = true;
        j++;
      }
    }
  }
  return prime.length;
};

// @lc code=end
