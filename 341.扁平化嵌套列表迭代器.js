/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
var NestedIterator = function (nestedList) {
  this.stack = nestedList;
};

NestedIterator.prototype.hasNext = function () {
  while (this.stack.length !== 0) {
    if (this.stack[0].isInteger()) {
      return true;
    } else {
      let cur = this.stack[0].getList();
      this.stack.shift();
      this.stack.unshift(...cur);
    }
  }
};

NestedIterator.prototype.next = function () {
  return this.stack.shift().getInteger();
};
// @lc code=end

