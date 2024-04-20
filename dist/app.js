import { BubbleSort } from './sorting_algorithm/BubbleSort.js';
import { ReverseString } from './basic_algorithms/ReverseString.js';
const sort = new BubbleSort([43, 11, -6, 2, 6, 5, 7]);
sort.sort();
// console.log(sort.collection);
const reverseString = new ReverseString('work now');
reverseString.reverseByforLoop();
console.log(reverseString.str);
