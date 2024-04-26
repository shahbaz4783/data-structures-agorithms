export const sumOfEvenSquares = (arr: number[]) => {
	const evenSquareSum = arr
		.filter((num) => num % 2 === 0)
		.map((num) => num ** 2)
		.reduce((total, num) => total + num, 0);
	return evenSquareSum;
};
