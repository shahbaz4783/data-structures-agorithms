export class ReverseString {
	constructor(public string: string) {}

	reverse(): void {
		this.string = this.string.split('').reverse().join('');
	}
}
