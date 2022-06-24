/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let low = 0,
			high = n;
		let first = n;
		while (low <= high) {
			const mid = low + Math.floor((high - low) / 2);
            
			if (isBadVersion(mid)) {
				first = mid;
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
		return first;
	};
};
// @lc code=end
