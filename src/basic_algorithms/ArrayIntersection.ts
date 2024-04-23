export class ArrayIntersection {
	constructor(public arr1: number[], public arr2: number[]) {}

	getIntersection(): number[] {
		const intersectionArr: number[] = [];
		for (let i = 0; i <= this.arr1.length; i++) {
			if (
				this.arr2.includes(this.arr1[i]) &&
				!intersectionArr.includes(this.arr1[i])
			) {
				intersectionArr.push(this.arr1[i]);
			}
		}
		return intersectionArr;
	}

	intersectionBySet(): number[] {
		const arr1Set = new Set(this.arr1);
		const intersectionArr: number[] = [];

		for (let num of this.arr2) {
			if (arr1Set.has(num)) {
				intersectionArr.push(num);
			}
		}
		return intersectionArr;
	}
}
