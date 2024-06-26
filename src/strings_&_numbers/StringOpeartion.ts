export class String {
	constructor(public str: string) {}

	countOccurences(char: string): number {
		let count = 0;
		const { length } = this.str;
		for (let i = 0; i <= length; i++) {
			if (this.str[i] === char) {
				count++;
			}
		}
		return count;
	}

	countVowels(): number {
		const formattedStr = this.str.toLowerCase();
		const { length } = formattedStr;
		let count = 0;

		for (let i = 0; i <= length; i++) {
			const char = formattedStr[i];
			if (
				char === 'a' ||
				char === 'e' ||
				char === 'i' ||
				char === 'o' ||
				char === 'u'
			) {
				count++;
			}
		}
		return count;
	}

	highestScoringWord() {
		const wordArr = this.str.split(' ');

		const scores = wordArr.map((word) => {
			let score = 0;
			for (const letter of word) {
				score += letter.charCodeAt(0) - 96;
			}
			return score;
		});
		let highScore = 0;
		let highestIndex = 0;

		for (let i = 0; i <= scores.length; i++) {
			if (scores[i] > highScore) {
				highScore = scores[i];
				highestIndex = i;
			}
		}

		return { word: wordArr[highestIndex], score: highScore };
	}
}
