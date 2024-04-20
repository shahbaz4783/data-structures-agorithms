import { BubbleSort } from './sorting_algorithm/BubbleSort.js';
import { ReverseString } from './basic_algorithms/ReverseString.js';
import { Count } from './basic_algorithms/Count.js';

const sort = new BubbleSort([43, 11, -6, 2, 6, 5, 7]);
sort.sort();
// console.log(sort.collection);

const reverseString = new ReverseString('work now');
reverseString.reverseByforLoop();
// console.log(reverseString.str);

const countVowel = new Count('this works');
const vowels = countVowel.countVowels();
// console.log(vowels);

const countOcc = new Count('hello there');
const occ = countOcc.countOccurences('e');
console.log(occ);
