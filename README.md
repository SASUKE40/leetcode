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

### 42.trapping-rain-water



## Backtracking



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

