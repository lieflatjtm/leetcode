/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**暴力破解 */
// var twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		for (let j = nums.length - 1; j > 0; j--) {
// 			if ((i !== j && nums[i] + nums[j]) == target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// };

/**线性查找 */
// var twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		let complement = target - nums[i];
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[j] == complement) {
// 				return [i, j];
// 			}
// 		}
// 	}
// };

/*哈希表*/
var twoSum = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		/**目标数字 */
		const x = target - nums[i];
		/**查表 */
		if (map.has(x)) {
			return [map.get(x), i];
		}
		/**没有就把数字键值加进表中 */
		map.set(nums[i], i);
	}
};
const a = twoSum([3, 2, 4], 6);
console.log("a: ", a);

// @lc code=end
