/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map();
  this.record = [];
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let value = this.map.get(key);
  if (value) {
    let keyIndex = this.record.indexOf(key);
    this.record.splice(keyIndex, 1);
    this.record.push(key);
  }
  return value || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.map.set(key, value);
  let keyIndex = this.record.indexOf(key);
  if (keyIndex > -1) {
    this.record.splice(keyIndex, 1);
    this.record.push(key);
  } else {
    if (this.record.length < this.capacity) {
      this.record.push(key);
    } else {
      let deleteKey = this.record.shift();
      this.map.delete(deleteKey);
      this.record.push(key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// @lc code=end
