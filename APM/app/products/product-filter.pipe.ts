import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from './product';

@Pipe({
	name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
	
	// Transform the list of products to a filtered list of products
	transform(value: IProduct[], filterBy: string): IProduct[] {
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		
		// filter() creates a new array with all elements that return true from the search criteria
		// See ES2015 implementation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		return filterBy ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) > -1 ) : value;
	}
}