/**
 * Description:
 * Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.
 * Returm null if the argument is invalid.
 * maxRedigit(123) --> 321
 * maxRedigit(231) --> 321
 * maxRedigit(321) --> 321
 *
 * return
 * maxRedigit(-1)  --> null
 * maxRedigit(0)   --> null
 * maxRedigit(99)  --> null
 * maxRedigit(1000) --> null
 */

function biggestNumber(num) {
	// condition if number is { 100 < n > 1000 }
	if (num <= 100 || num >= 999) {
		return null;
	} else {
		let newNum = num.toString(); // newNum is string "num"
		let numArr = newNum.split(""); // num Arr is [arr]

		// descending sorting
		maxNum = numArr.sort(function (a, b) {
			return b - a;
		});

		return maxNum;
	}
}

console.log(biggestNumber(999));
