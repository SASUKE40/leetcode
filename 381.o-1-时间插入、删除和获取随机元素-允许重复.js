/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.idx = new Map();
  this.nums = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.nums.push(val);
  const set = this.idx.has(val) ? this.idx.get(val) : new Set();
  set.add(this.nums.length - 1);
  this.idx.set(val, set);
  return set.size === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.idx.has(val)) {
    return false;
  }
  let i = undefined;
  for (const it of this.idx.get(val)) {
    if (!i) {
      i = it;
      break;
    }
  }
  const lastNum = this.nums[this.nums.length - 1];
  this.nums[i] = lastNum;
  this.idx.get(val).delete(i);
  this.idx.get(lastNum).delete(this.nums.length - 1);
  if (i < this.nums.length - 1) {
    this.idx.get(lastNum).add(i);
  }
  if (this.idx.get(val).size === 0) {
    this.idx.delete(val);
  }
  this.nums.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};
// @lc code=end
