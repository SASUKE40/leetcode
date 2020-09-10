/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  // 1. 排序
  candidates.sort((a, b) => a - b);

  // 2. 设置哈希集合，记录重复的路径，例如 [1, 7] 和 [7, 1]
  const set = new Set();

  // 3. 通过 result 捕获结果
  const result = [];

  // 4. 递归
  const recursion = (index, sum, path) => {
    // 4.1 如果等于目标，result 捕获结果
    if (sum === target) {
      // 4.1.1 浅拷贝数组并且排序
      const newPath = path.concat().sort((a, b) => a - b);

      // 4.1.2 获取一个字符串版本的新数组
      const newPathStr = newPath.join('-');

      // 4.1.3 如果还没有添加过这个路径，那么就添加它
      if (!set.has(newPathStr)) {
        result.push(path.concat());
      }

      // 4.1.4 记录这个路径
      set.add(newPathStr);
      return;
    }

    // 4.2 从 index 开始，遍历数组，查找可用目标
    for (let i = index; i < candidates.length; i++) {
      // 4.2.1 获取当前的总和
      const nowSum = sum + candidates[i];

      // 4.2.2 如果超过范围了，中止后面的循环
      if (nowSum > target) {
        break;
      }

      // 4.2.3 笑嘻嘻接待老板 i
      path.push(candidates[i]);

      // 4.2.4 让司机送老板出门
      recursion(i + 1, nowSum, path);

      // 4.2.5 呸,撤掉老板的位置,等待 i + 1 老板的光临
      path.pop();
    }
  };
  recursion(0, 0, []);

  // 5. 返回结果
  return result;
};

// @lc code=end
