interface ProductProps {
	name: string;
	price: number;
	quantity: number;
}

export class ProductSales {
	constructor(public products: ProductProps[]) {}

	getTotalSales(tax: number) {
		const totalSalesAmount = this.products.reduce(
			(sum, product) => sum + product.price * product.quantity,
			0
		);
		const totalTax = (totalSalesAmount * tax) / 100;
		const salesAfterTax = totalSalesAmount + totalTax;
		return parseFloat(salesAfterTax.toFixed(2));
	}
}
