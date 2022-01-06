/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let res = [];
	let list1 = num1.split("");
	let list2 = num2.split("");
	if (list1.length >= list2.length) {
		helpers(list1, list2);
	} else {
		helpers(list2, list1);
	}
	function helpers(longList, shortList) {
		// 进位
		let carry = 0;
		for (let i = 0; i < longList.length; i++) {
			const long_idx = longList.length - i - 1;
			const short_idx = shortList.length - i - 1;

			let sum = 0;

			if (short_idx >= 0) {
				sum = Number(longList[long_idx]) + Number(shortList[short_idx]) + carry;
			} else {
				sum = Number(longList[long_idx]) + carry;
			}

			if (sum >= 10) {
				sum = sum - 10;
				carry = 1;
			} else {
				carry = 0;
			}

			// 往新数组中推求和之后的最新值
			res.push(sum);
		}
		// 这里还要判断一下进位是不是1，如果是1需要往数组里面进1
		if (carry == 1) {
			res.push(1);
		}
	}
	return res.reverse().join("");
};

// @lc code=end
