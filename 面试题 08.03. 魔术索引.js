/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  return getAnswer(nums, 0, nums.length - 1);
};

function getAnswer(nums, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = (left + right) >> 1;
  let leftAnswer = getAnswer(nums, left, mid - 1);
  if (leftAnswer !== -1) {
    return leftAnswer;
  } else if (nums[mid] == mid) {
    return mid;
  }
  return getAnswer(nums, mid + 1, right);
}
