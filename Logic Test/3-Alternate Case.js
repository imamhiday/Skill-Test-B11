/**
 * Alternate each case of each of string given
 *
 * alternateCase("abc")            => "ABC"
 * alternateCase("ABC")            => "abc"
 * alternateCase("Hello World")    => "hELLO wORLD"
 */

function swapCase(kata) {
	// initialization variable newstring, container of new String
	let newString = "";

	// looping each letter
	for (let i = 0; i < kata.length; i++) {
		// check if string is upper
		if (kata[i] === kata[i].toUpperCase()) {
			newString += kata[i].toLowerCase();
			// console.log(kata[i] + "is upper");
		}
		// if string is lower
		else {
			newString += kata[i].toUpperCase();
			// console.log(kata[i] + "is lower");
		}
	}

	return newString;
}

let coba = swapCase("MenCoBa UnTuK pertAmA");

console.log(coba);
