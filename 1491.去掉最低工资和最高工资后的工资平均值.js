/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	let count = 0;
	let max = salary[0];
	let min = salary[0];

	salary.forEach(item => {
		if (item > max) {
			max = item;
		}
		if (item < min) {
			min = item;
		}
		count += item;
	});
	return (count - max - min) / (salary.length - 2);
};
// @lc code=end
