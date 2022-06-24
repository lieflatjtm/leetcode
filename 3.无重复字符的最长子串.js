/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * @path  https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/hua-dong-chuang-kou-by-powcai/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @solution: 利用数组队列思想
				[a]
				[a,b]
				[a,b,c]
				[a,b,c,a] -->[b,c,a]
				[b,c,a]
				[b,c,a,b] --> [c,a,b]
 */
var lengthOfLongestSubstring = function (s) {
	let arr = [];
	let max = 0;
	for (let key of s) {
		while (arr.includes(key)) {
			arr.shift();
		}
		arr.push(key);
		max = Math.max(arr.length, max);
	}
	return max;
};

lengthOfLongestSubstring("abcabcbb");
// @lc code=end
