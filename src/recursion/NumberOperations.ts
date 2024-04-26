export class Number {
	constructor(public num: number) {}

	factorial(): number {
		const num = this.num;
		if (num === 0 || num === 1) return 1;
		return num * new Number(num - 1).factorial();
	}

	sumUpTo(): number {
		const num = this.num;
		if (num === 1) return 1;
		return num + new Number(num - 1).sumUpTo();
	}
}
