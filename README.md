# LeetCode Record

## Array

一般要义是多指针

### 15.3-sum

low high 双指针移动，计算结果向 target 逼近

```js
var threeSum = function (nums) {
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let high = nums.length - 1;
      let low = i + 1;
      let sum = 0 - nums[i];
      while (low < high) {
        if (nums[high] + nums[low] === sum) {
          ans.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[high] === nums[high - 1]) high--;
          while (low < high && nums[low] === nums[low + 1]) low++;
          low++;
          high--;
        } else if (nums[high] + nums[low] > sum) {
          high--;
        } else if (nums[high] + nums[low] < sum) {
          low++;
        }
      }
    }
  }
  return ans;
};
```

### 31.next-permutation

1. 从后向前找到第一个临接上升子序，记下表 upperIndex
2. 如果数组为降序，则反转
3. 从后向前找到第一个比 nums[upperIndex] 大的数与之交换
4. 从 upperIndex+1 之后的部分 reverse

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    let upperIndex = len - 1;

    /**
     * find the first increasing sub sequence back to front
     */
    for (let i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            upperIndex = i - 1;
            break;
        }
    }

    /**
     * if not found, reverse it
     */
    if (upperIndex === len - 1) {
        nums = nums.reverse();
    }

    /**
     * swap upperIndex with the first greater num back to front
     */
    for (let i = len - 1; i > upperIndex; i--) {
        if (nums[i] > nums[upperIndex]) {
            swap(nums, i, upperIndex);
            break;
        }
    }

    /**
     * reverse the suplus array after upperIndex
     */
    for (let i = 1; i < (len - upperIndex + 1) >> 1; i++) {
        swap(nums, i + upperIndex, len - i);
    }
    /**
     * es6 swap function
     */
    function swap(nums, i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
```





### 42.trapping-rain-water



## Backtracking

### 300.longest-increasing-subsequence

贪心算法+二分查找，数组并不是最终答案，但 i 位上为 i+1 长度的上升子序列最小尾

## Binary Search
一般要义就是二分

```js
while (low < high) {
  const mid = (low + (high - low)) >> 1;
  if (nums[i] > nums[mid]) low = mid + 1;
  else high = mid;
}
return low;
```

### 33.search-in-rotated-sorted-array

[4,5,6,7,0,1,2] target: 0
mid: 7 > 0
low: 4 > 0 一定不在左边，从右边找，以此类推



## Bit Manipulation

### 268.missing-number

使用异或消除



