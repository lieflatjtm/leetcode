/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @description https://leetcode.cn/problems/reverse-string/solution/fan-zhuan-zi-fu-chuan-by-leetcode-solution/
 */

var reverseString = function (s) {
	for (let left = 0, right = s.length - 1; left < right; left++, right--) {
		[s[left], s[right]] = [s[right], s[left]];
	}
};
// @lc code=end
