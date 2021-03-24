/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const n = nums.length;
  const candidateI = [nums[0]], candidateJ = [nums[0]];

  for (let k = 1; k < n; ++k) {
    const idxI = binarySearchFirst(candidateI, nums[k]);
    const idxJ = binarySearchLast(candidateJ, nums[k]);
    if (idxI >= 0 && idxJ >= 0) {
      if (idxI <= idxJ) {
        return true;
      }
    }

    if (nums[k] < candidateI[candidateI.length - 1]) {
      candidateI.push(nums[k]);
      candidateJ.push(nums[k]);
    } else if (nums[k] > candidateJ[candidateJ.length - 1]) {
      const lastI = candidateI[candidateI.length - 1];
      while (candidateJ.length && nums[k] > candidateJ[candidateJ.length - 1]) {
        candidateI.pop();
        candidateJ.pop();
      }
      candidateI.push(lastI);
      candidateJ.push(nums[k]);
    }
  }

  return false;
};

const binarySearchFirst = (candidate, target) => {
  let low = 0, high = candidate.length - 1;
  if (candidate[high] >= target) {
    return -1;
  }
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = candidate[mid];
    if (num >= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

const binarySearchLast = (candidate, target) => {
  let low = 0, high = candidate.length - 1;
  if (candidate[low] <= target) {
    return -1;
  }
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    const num = candidate[mid];
    if (num <= target) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low;
}
// @lc code=end

