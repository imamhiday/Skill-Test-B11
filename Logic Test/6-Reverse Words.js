function wordReverse(str) {
	let reversed = [];
	let words = str.split(" ");
	for (let word of words) {
		let uppercaseIndices = word.split("").reduce((acc, char, i) => {
			if (/[A-Z]/.test(char)) {
				acc[i] = true;
			}
			return acc;
		}, {});

		let newWord = word
			.split("")
			.reverse()
			.map((char, i) => {
				if (uppercaseIndices[i]) {
					return char.toUpperCase();
				} else {
					return char.toLowerCase();
				}
			})
			.join("");

		reversed.push(newWord);
	}

	return reversed.join(" ");
}

console.log(wordReverse("I am A Great human"));
