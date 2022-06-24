/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var countOdds = function (low, high) {
// 	let count = 0;
// 	for (let i = low; i <= high; i++) {
// 		if (i % 2 !== 0) {
// 			count++;
// 		}
// 	}
// 	return count;
// };

/**
 *
 * 1 2 3 ==> 2 ==> (3-1)/2 + 1
 * 1 2 3 4 ==> 2 ==> (4-1)/2
 * 1 2 3 4 5 ==> 3 ==> (5-1)/2 + 1
 * 2 3 4 5 6 ==> 2 ==> (6-2)/2
 * 2 3 4 5 6 7 ==> 3 ==>  (7-2)/2
 * 3 4 5 6 7 8 9 10 11==> 5 ==> (11-3)/2 + 1
 */
var countOdds = function (low, high) {
	const middle = (high - low) / 2;
	if (low % 2 !== 0 && high % 2 !== 0) {
		return Math.floor(middle + 1);
	} else {
		return Math.ceil(middle);
	}
};
// @lc code=end
