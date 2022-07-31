/**
 * Given variable string contains of all alphabet from A to Z ”ABCDEFGHIJKLMNOPQRSTUVWXYZ”
 * Build a function that receive two paramters: first letter and last letter.
 * That will do to find middle letter between of the specified letter.
 *
 * Example:
 * - The middle between Q and U is **S**
 * - The middle between R and U is **ST**
 * - The middle between T and Z is **W**
 * - The middle between Q and Z is **UV**
 */

let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function findMiddle(a, b) {
	let a1 = alphabets.indexOf(a);
	let b1 = alphabets.indexOf(b);
	let mid = (a1 + b1) / 2;
	let member = 0;

	if (mid % 2 == 0.5) {
		member = 2;
	} else {
		member = 1;
	}

	let middle_alfabet = alphabets.substring(mid, mid + member);

	return middle_alfabet;
}

// console.log(findMiddle("Q", "U"));
console.log(findMiddle("R", "U"));
