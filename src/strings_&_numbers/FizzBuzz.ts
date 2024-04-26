export class FizzBuzz {
	constructor(public length: number) {}

	method_A() {
		const fizzBuzzArr: (string | number)[] = [];

		for (let i = 1; i <= this.length; i++) {
			if (i % 15 === 0) {
				fizzBuzzArr.push('FizzBuzz');
			} else if (i % 3 === 0) {
				fizzBuzzArr.push('Fizz');
			} else if (i % 5 === 0) {
				fizzBuzzArr.push('Buzz');
			} else {
				fizzBuzzArr.push(i);
			}
		}

		return fizzBuzzArr;
	}
}
