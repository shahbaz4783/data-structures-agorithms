import { BubbleSort } from './sorting_algorithm/BubbleSort.js';
import { ReverseString } from './basic_algorithms/ReverseString.js';
import { Count } from './basic_algorithms/Count.js';
import { FizzBuzz } from './basic_algorithms/FizzBuzz.js';
import { ArrayIntersection } from './basic_algorithms/ArrayIntersection.js';
import { StringyArray } from './basic_algorithms/StringyArray.js';
import { sumOfEvenSquares } from './basic_algorithms/SumOfEvenNumbers.js';
import { ProductSales } from './basic_algorithms/ProductSales.js';

//------------- Bubble Sort
const sort = new BubbleSort([43, 11, -6, 2, 6, 5, 7]);
sort.sort();
// console.log(sort.collection);

//------------- Reverse String
const reverseString = new ReverseString('work now');
reverseString.reverseByforLoop();
// console.log(reverseString.str);

//------------- Count
const countVowel = new Count('this works');
const vowels = countVowel.countVowels();
// console.log(vowels);

const countOcc = new Count('hello there');
const occ = countOcc.countOccurences('e');
// console.log(occ);

//------------- FizzBuzz
const fizzy = new FizzBuzz(16);
const fizzBuzzArr = fizzy.method_A();
// console.log(fizzBuzzArr);

//------------- Array Intersection
const arr1 = [2, 3, 5, 1, 4];
const arr2 = [5, 1, 4, 2, 6];

const intersectionArr = new ArrayIntersection(arr1, arr2);
const intersection = intersectionArr.intersectionBySet();
// console.log(intersection);

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

//------------- Product Sales

const products = [
	{ name: 'demo', price: 10, quantity: 10 },
	{ name: 'demo', price: 10, quantity: 10 },
];
const productSales = new ProductSales(products);

const totalSalesPrice = productSales.getTotalSales(8);
console.log(totalSalesPrice);
