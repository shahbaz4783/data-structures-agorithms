export class StringyArray {
	constructor(public names: string[]) {}

	countLikes(): string {
		const { length } = this.names;
		switch (length) {
			case 0:
				return 'no one likes this';
			case 1:
				return `${this.names[0]} like this`;
			case 2:
				return `${this.names[0]} and ${this.names[1]} like this`;
			case 3:
				return `${this.names[0]}, ${this.names[1]} and ${this.names[2]} like this`;
			default:
				return `${this.names[0]}, ${this.names[1]} and ${
					length - 2
				} others like this`;
		}
	}
}
