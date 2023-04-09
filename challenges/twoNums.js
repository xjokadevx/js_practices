/**
 * Given an array numbers and target number,
 * This function should returns index of two numbers than
 * added must be equals to target
 *
 */

const nums = [11, 2, 15, 7, 4, 8, 9, 10, 23];
const target = 9;

/**
 *
 * @param {Array<Number>} nums Array of numbers
 * @param {Number} target number
 */
const a = (function twoSum(nums = [], target = 0) {
  let a = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    let n = nums[i];
    if (a[target - n] >= 0) {
      console.log(a[target - n]);
      return [a[target - n], i];
    } else {
      a[n] = i;
    }
  }
})(nums, 9);

console.log("a", a);
