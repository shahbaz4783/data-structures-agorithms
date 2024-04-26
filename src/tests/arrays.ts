import { ArrayIntersection } from '../arrays/ArrayIntersection.js';
import { StringyArray } from '../arrays/StringyArray.js';
import { sumOfEvenSquares } from '../arrays/SumOfEvenNumbers.js';
import { BubbleSort } from '../sorting_algorithm/BubbleSort.js';

export const arrayTests = () => {
	//------------- Array Intersection
	const arr1 = [2, 3, 5, 1, 4];
	const arr2 = [5, 1, 4, 2, 6];

	const intersectionArr = new ArrayIntersection(arr1, arr2);
	const intersection = intersectionArr.intersectionBySet();
	console.log(intersection);

	const sortArrIntersection = new BubbleSort(intersection);
	sortArrIntersection.sort();
	console.log(sortArrIntersection.collection);

	const likedByPeoples = ['adam', 'tom', 'john', 'alex', 'max'];
	const likeCount = new StringyArray(likedByPeoples);
	const countLikes = likeCount.countLikes();
	console.log(countLikes);

	//------------- Sum of even square
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
	const getSumOfevenNumbers = sumOfEvenSquares(numbers);
	console.log(getSumOfevenNumbers);
};
