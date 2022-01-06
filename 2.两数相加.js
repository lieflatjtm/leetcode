/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @path https://www.bilibili.com/video/BV1p44y1779u?from=search&seid=15078166145966973262&spm_id_from=333.337.0.0
 */
var addTwoNumbers = function (l1, l2) {
	// 虚拟链表头部
	let resHeadNode = (list = new ListNode(0));
	// 设置进位默认为0
	let carry = 0;

	while (l1 || l2) {
		// 取值
		let v1 = l1 ? l1.val : 0;
		let v2 = l2 ? l2.val : 0;
		let sum = v1 + v2 + carry;
		// 判断sum是否大于0，若大于0 进位+1
		if (sum >= 10) {
			sum = sum - 10;
			carry = 1;
		} else {
			carry = 0;
		}
		list.next = new ListNode(sum, null);
		list = list.next;
		l1 = l1 ? l1.next : l1;
		l2 = l2 ? l2.next : l2;
	}

	if (carry == 1) {
		list.next = new ListNode(1, null);
	}
	return resHeadNode.next;
};

// @lc code=end
