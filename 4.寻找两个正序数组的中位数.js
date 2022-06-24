/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function (nums1, nums2) {
	// 合并数组
	let newList = [...nums1, ...nums2].sort((a, b) => a - b);
	// 判断长度
	let len = newList.length;
	// 偶数
	if (len % 2 == 0) {
		let center = len / 2;
		return (newList[center] + newList[center - 1]) / 2;
	}
	// 奇数
	return newList[(len - 1) / 2];
};

// @lc code=end

