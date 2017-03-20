/* 
 * ProductFilterPipe used in ProductListComponent
 *
 * Filters the product list based on the user's filter by value
 * Class name must also be included in the component module's declarations array
*/

/* Uses the Angular Pipe decorator and PipeTransform interface */
import { Pipe, PipeTransform } from '@angular/core';

/* Uses the IProduct interface/datatype */
import { IProduct } from './product';

/* 
 * Pipe decorator function, defines the metadata for the pipe
 *
 * Passed an object with the following properties:
 * 	name: string 	- name of the filter used in the HTML. 
 *  Example: `<tr *ngFor="let product of products | productFilter:listFilter">`
 */
@Pipe({
	name: 'productFilter'
})
/* 
 * ProductListPipe class
 *
 * Exported so that it can be used anywhere in application
 *
 * Implements PipeTransform, so transform() method is required.
 * A class must have code for every property and method of the interface that it implements.
*/
export class ProductFilterPipe implements PipeTransform {
	
	// Transform the list of products to a filtered list of products
	transform(value: IProduct[], filterBy: string): IProduct[] {
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		
		// filter() creates a new array with all elements that return true from the search criteria
		// See ES2015 implementation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		return filterBy ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) > -1 ) : value;
	}
}