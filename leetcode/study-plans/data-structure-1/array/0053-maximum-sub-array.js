/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
	let maxSub = nums[0],
		curSum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (curSum < 0) curSum = 0;
		curSum += nums[i];
		maxSub = Math.max(maxSub, curSum);
	}
	return maxSub;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
