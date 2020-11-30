/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  if (S.length < 2) {
    return S;
  }

  const length = S.length;
  const counts = _.countBy(S);
  const maxCount = Math.max(...Object.values(counts));
  if (maxCount > Math.floor((length + 1) / 2)) {
    return '';
  }

  const queue = new MaxPriorityQueue();
  Object.keys(counts).forEach((x) => queue.enqueue(x, counts[x]));
  let ans = new Array();

  while (queue.size() > 1) {
    const letter1 = queue.dequeue()['element'];
    const letter2 = queue.dequeue()['element'];
    ans = ans.concat(letter1, letter2);
    counts[letter1]--;
    counts[letter2]--;
    if (counts[letter1] > 0) {
      queue.enqueue(letter1, counts[letter1]);
    }
    if (counts[letter2] > 0) {
      queue.enqueue(letter2, counts[letter2]);
    }
  }

  if (queue.size()) {
    ans.push(queue.dequeue()['element']);
  }

  return ans.join('');
};
// @lc code=end
