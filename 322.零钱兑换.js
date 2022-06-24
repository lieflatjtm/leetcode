/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/**
 *
 * @steps:
 * - amount整除coins最大值 ， 可以整除及最小数量
 * - 不能整除，取余数，
 * - 余数整除coins最大值，可以整除及最小数量
 *
 */
var coinChange = function (coins, amount) {
	let count = 0;
	for (let i = coins.length - 1; i > 0; i--) {
		if (amount % coins[i] === 0) {
			return amount / coins[i];
		}else{
      count += amount % coins[i];
    }
};

// @lc code=end
