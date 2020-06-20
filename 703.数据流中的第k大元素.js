/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.bst = new BST();
  this.k = k;
  for (const num of nums) {
    this.bst.insert(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.bst.insert(val);
  return this.bst.kth(this.k);
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}
class BST {
  root = null;
  insert(val) {
    this.root = this._insert(this.root, val);
  }
  _insert(x, val) {
    if (!x) return new TreeNode(val);
    if (x.val >= val) {
      x.left = this._insert(x.left, val);
    } else if (x.val < val) {
      x.right = this._insert(x.right, val);
    }
    x.count = this.count(x.left) + this.count(x.right) + 1;
    return x;
  }
  count(x) {
    if (!x) return 0;
    return x.count;
  }
  kth(k) {
    return this._kth(this.root, k);
  }
  _kth(x, k) {
    let m = 1;
    if (x.right) m = x.right.count + 1;
    if (m === k) return x.val;
    else if (m > k) {
      return this._kth(x.right, k);
    } else {
      return this._kth(x.left, k - m);
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
