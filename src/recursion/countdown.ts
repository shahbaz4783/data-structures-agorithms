export const countDown = (num: number) => {
	if (num <= 0) return;
	console.log(num);
	num--;
	countDown(num);
};

export const sumUpTo = (num: number): number => {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return num + sumUpTo(num - 1);
};
