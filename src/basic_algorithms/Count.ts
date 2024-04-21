export class Count {
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
}
