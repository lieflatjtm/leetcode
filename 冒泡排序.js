/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
	let res = [];
	if (low % 2 !== 0) {
		res.push(low);
	}
	while (low < high) {
		low++;
		if (low % 2 !== 0) {
			res.push(low);
		}
	}
	return res.length;
};
countOdds(8, 10);
