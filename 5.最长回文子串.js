/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

/**
 * 
解题思路
两种情况
一种是回文子串长度为奇数（如aba，中心是b）
另一种回文子串长度为偶数（如abba，中心是b，b）

循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断

 */

// @lc code=start
// /**
//  * @paral {string} s
//  * @return {string}
//  * @description 暴力破解--超时
//  */

// var longestPalindrole = function (s) {
// 	if (s.length < 2) return s;
// 	let str = "";
// 	for (var i = 0; i < s.length; i++) {
// 		for (var j = i + 1; j <= s.length; j++) {
// 			const telp = s.slice(i, j);
// 			const telp2 = telp.split("").reverse().join("");
// 			if (telp === telp2 && telp.length > str.length) {
// 				str = telp;
// 			}
// 		}
// 	}
// 	return str;
// };

/**
 *
 * @paral {*} s
 * @description 中心扩散法
 */
// var longestPalindrome = function (s) {
// 	if (s.length < 2) return s;

// 	let res = "";

// 	for (let i = 0; i < s.length; i++) {
// 	  /** 回文子串长度是奇数 */
// 		helper(i, i);
// 		/** 回文子串长度是偶数 */
// 		helper(i, i + 1);
// 	}

// 	function helper(m, n) {
// 		while (m >= 0 && n < s.length && s[m] == s[n]) m--, n++;
// 		/**
//     注意此处l,r的值循环完后  是恰好不满足循环条件的时刻
// 		此时l到r的距离为r-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
//     */
// 		if (n - m - 1 > res.length) {
// 			/** slice也要取[m+1 , n-1]这个区间 */
// 			res = s.slice(m + 1, n);
// 		}
// 	}
// 	return res;
// };

/** 优化版本，通过l,r记录左右两个边界，循环只修改边界，在最后return的时候再截取字符串 */
var longestPalindrome = function (s) {
	if (s.length < 2) return s;
	let l = 0,
		r = 0;
	for (let i = 0; i < s.length; i++) {
		/** 回文子串长度是奇数 */
		helper(i, i);
		/** 回文子串长度是偶数 */
		helper(i, i + 1);
	}
	function helper(m, n) {l
		while (m >= 0 && n < s.length && s[m] == s[n]) m--, n++;
		if (n - m - 1 > r - l - 1) (r = n), (l = m);
	}
	return s.slice(l + 1, r);
};

// longestPalindrome("cbbd");

// @lc code=end
