/**
 * Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed
 *
 * solution (10) // => 23 = 3 + 5 + 6 + 9
 * solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
 */

// find member of result
// function multiples(num) {
// 	// initialization member, container of number multiples
// 	member = [];
// 	total = 0;

// 	// looping
// 	for (let i = 1; i < num; i++) {
// 		// condition
// 		if (i % 3 == 0 || i % 5 == 0) {
// 			member.push(i);
// 			total += i;
// 		}
// 	}
// 	return member, total;
// }

// console.log(multiples(10));

function multiples(num) {
	// initialization member, container of number multiples
	let total = 0;

	// looping
	for (let i = 1; i < num; i++) {
		// condition
		if (i % 3 == 0 || i % 5 == 0) {
			total += i;
		}
	}
	return total;
}

console.log(multiples(20));
