/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
	/** 这里的low ， high 为index坐标 */
	let low = 0;
	let high = nums.length - 1;
	while (low <= high) {
		/**
		 * mid 一般为 (high+low)/2 , 但是可能会出现数字相加超出限制的情况，故改为下面的写法
		 * (high+low)/2  ==> high/2 + low/2
		 * low + (high- low) / 2 	==> low + high/2 - low/2 ==> high/2 + low/2
		 */
		let mid = low + Math.floor((high - low) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] > target) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
};

// @lc code=end
