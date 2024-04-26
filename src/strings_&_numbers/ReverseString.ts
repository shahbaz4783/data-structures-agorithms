export class ReverseString {
	constructor(public str: string) {}

	reverse(): void {
		this.str = this.str.split('').reverse().join('');
	}

	reverseByforLoop(): void {
		let reversed: string = '';
		for (let i = this.str.length - 1; i >= 0; i--) {
			reversed += this.str[i];
		}
		this.str = reversed;
	}
}
