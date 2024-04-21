export const fizzBuzzArray = (value: number) => {
	const fizzBuzz: (string | number)[] = [];

	for (let i = 1; i <= value; i++) {
		if (i % 15 === 0) {
			fizzBuzz.push('FizzBuzz');
		} else if (i % 3 === 0) {
			fizzBuzz.push('Fizz');
		} else if (i % 5 === 0) {
			fizzBuzz.push('Buzz');
		} else {
			fizzBuzz.push(i);
		}
	}

	return fizzBuzz;
};
