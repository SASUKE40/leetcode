/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
var MyHashMap = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashMap.prototype.put = function (key, value) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      it[1] = value;
      return;
    }
  }
  this.data[h].push([key, value]);
};

MyHashMap.prototype.get = function (key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      return it[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      const idx = this.data[h].indexOf(it);
      this.data[h].splice(idx, 1);
      return;
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.BASE;
}
// @lc code=end

