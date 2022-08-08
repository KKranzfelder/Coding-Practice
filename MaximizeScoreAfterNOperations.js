/**
 * @param {number[]} nums
 * @return {number}
 */

var findGCD = function(num1, num2) => {
  let high = Math.max(num1, num2),
      low = Math.min(num1, num2);

  while (!Number.isInteger(high / low)) {
    low--;
  }

  return low;
}

 var maxScore = function(nums) {
    let numOps = nums.length / 2;

    while (nums.length > 0) {
      
    }
};