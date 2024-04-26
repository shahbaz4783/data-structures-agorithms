import { FizzBuzz } from '../strings_&_numbers/FizzBuzz.js';
import { ProductSales } from '../strings_&_numbers/ProductSales.js';
import { ReverseString } from '../strings_&_numbers/ReverseString.js';
import { String } from '../strings_&_numbers/StringOpeartion.js';

export const stringNumTests = () => {
	// Reverse String
	const reverseString = new ReverseString('work now');
	reverseString.reverseByforLoop();
	console.log(reverseString.str);

	//------------- FizzBuzz
	const fizzy = new FizzBuzz(16);
	const fizzBuzzArr = fizzy.method_A();
	console.log(fizzBuzzArr);

	//------------- Count
	const countVowel = new String('this works');
	const vowels = countVowel.countVowels();
	console.log(vowels);

	const countOcc = new String('hello there');
	const occ = countOcc.countOccurences('e');
	console.log(occ);

	//------------- Highest Scoring Word
	const wordsStr = new String('nodejs is a javascript runtime');
	const highestScoringObj = wordsStr.highestScoringWord();
	console.log(highestScoringObj);

	//------------- Product Sales
	const products = [
		{ name: 'demo', price: 10, quantity: 10 },
		{ name: 'demo', price: 10, quantity: 10 },
	];
	const productSales = new ProductSales(products);

	const totalSalesPrice = productSales.getTotalSales(8);
	console.log(totalSalesPrice);
};
