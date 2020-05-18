# LeetCode Record

## Array

### 前缀和法

Given an array of integers `nums`, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

**Example 1:**

```
Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
```

 

**Example 2:**

```
Input: 
nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.
```

 

**Note:**

- The length of `nums` will be in the range `[0, 10000]`.
- Each element `nums[i]` will be an integer in the range `[-1000, 1000]`.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // 记录前缀和
    let dp = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        dp[i] = dp[i - 1] + nums[i - 1];
    }
    // 假设位置前后和相等，输出该位置
    for (let i = 0; i < nums.length; i++) {
        if(dp[dp.length - 1] - dp[i + 1] === dp[i]) return i;
    }
    return -1;
};
```

### 线性扫描法

In a given integer array `nums`, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the **index** of the largest element, otherwise return -1.

**Example 1:**

```
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
```

 

**Example 2:**

```
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
```

 

**Note:**

1. `nums` will have a length in the range `[1, 50]`.
2. Every `nums[i]` will be an integer in the range `[0, 99]`.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > nums[maxIndex] && i !== maxIndex) return -1;
    }
    return maxIndex;
};
```

### 多指针

#### 1.Two Sum

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let num = target - numbers[i];
        if (map.has(num)) return [map.get(num), i];
        map.set(numbers[i], i);
    }
};
```

#### 15.3-sum

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

#### 27.Remove Element

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    nums.length = i;
};
```

#### 31.next-permutation

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

#### 209.Minimum Size Subarray Sum

```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let slow = fast = 0
    let count = Infinity
    let sum = 0
    while (slow < nums.length && fast < nums.length) {
        sum += nums[fast]
        while (sum >= s) {
            count = Math.min(count, fast - slow + 1)
            sum -= nums[slow++]
        }
        fast++
    }
    return count === Infinity ? 0 : count
};
```



### 进位

Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let sum = 0;
    digits[digits.length - 1]++;
    let i = digits.length - 1;
    while (digits[i] === 10 && i >= 0) {
        digits[i] = 0;
        if (i !== 0) {
            digits[i - 1]++;
        } else {
            digits.unshift(1);
        }
        i--;
    }
    return digits;
};
```

### 模拟

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

 

**Example:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:
```

 

**Note:**

The total number of elements of the given matrix will not exceed 10,000.

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0) return [];
    const M = matrix.length;
    const N = matrix[0].length;
    const MatrixNum = M * N;
    let count = 0;
    let x = y = 0;
    let result = [];
    let direction = 'up';
    while (count < MatrixNum) {
        count++;
        result.push(matrix[x][y]);
        if (direction === 'up') {
            if (x > 0 && y < N - 1) {
                x--;
                y++;
                continue;
            } else {
                direction = 'down'
                if (x === 0 && y < N - 1) y++;
                else if (y === N - 1) x++;
            }

        } else {
            if (x < M - 1 && y > 0) {
                x++;
                y--;
                continue;
            } else {
                direction = 'up';
                if (y === 0 && x < M - 1)
                    x++;
                else if (x === M - 1)
                    y++;
            }
        }
    }
    return result;
};
```

### 杨辉三角

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    let result = new Array(numRows);
    result[0] = [1];
    for (let i = 1; i < numRows; i++) {
        result[i] = [1];
        for (let j = 1; j < i; j++) {
            result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        result[i].push(1);
    }
    return result;
};
```

## String

### 二进制加法

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = [];
    let arrayA = Array.from(a);
    let arrayB = Array.from(b);
    let sum = 0;
    while (arrayA.length > 0 || arrayB.length > 0) {
        let strA = arrayA.pop();
        let numA = Number(strA || 0);
        let strB = arrayB.pop()
        let numB = Number(strB || 0);
        sum = numA + numB + sum;
        result.push(sum % 2 >> 0);
        sum = sum / 2 >> 0;
    }
    if (sum) result.push(sum);
    return result.reverse().join('');
};
```

### subStr

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < haystack.length) {
        while (haystack[j] === needle[k]) {
            if (k === needle.length - 1) return i;
            j++;
            k++;
        }
        k = 0;
        j = ++i;
    }
    return -1;
};
```

### LCP

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
};
```



## Backtracking

### 300.longest-increasing-subsequence

贪心算法+二分查找，数组并不是最终答案，但 i 位上为 i+1 长度的上升子序列最小尾

## Binary Search
一般要义就是二分

```js
while (low < high) {
  const mid = low + high >> 1;
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



## Divide And Conquer

### 215.kth-largest-element-in-an-array

1. 转换成找地 nums.length -k 小的数
2. 不充分快排



## Dynamic Programming

### 62.Unique Paths

 类似于杨辉三角，状态转移方程：`dp[i][j] = dp[i][j-1] + dp[i-1][j]`

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[m - 1];
};
```

