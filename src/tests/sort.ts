import { BubbleSort } from '../sorting_algorithm/BubbleSort.js';

export const sortTests = () => {
	const sort = new BubbleSort([43, 11, -6, 2, 6, 5, 7]);
	sort.sort();
	console.log(sort.collection);
};
