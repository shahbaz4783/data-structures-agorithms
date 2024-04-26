import { countDown } from '../recursion/countdown.js';
import { Number } from '../recursion/NumberOperations.js';

export const recursionTests = () => {
	// Countdown recursion
	// countDown(10);

	// Number Operations
	const number = new Number(7);

	const factorial = number.factorial();
	console.log(factorial);

	const sumUpTo = number.sumUpTo();
	console.log(sumUpTo);
};
