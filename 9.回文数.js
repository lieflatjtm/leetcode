/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
// /**
//  * @param {number} x
//  * @return {boolean} 数组翻转
//  */
// var isPalindrome = function (x) {
//   if (x < 0) return false;
// 	let y = x.toString().split("").reverse().join("");
// 	return x.toString() == y;
// };

/**
 * @param {number} x
 * @return {boolean} 数字翻转
 */
var isPalindrome = function (x) {
	// 10以下直接return false
	if (x < 0 || (x % 10 == 0 && x != 0)) return false;
	
	let temp = 0,
		s = x;
	while (s) {
		temp = temp * 10 + (s % 10);
		s = Math.floor(s / 10);
	}
	return x === temp;
};

// @lc code=end
