/* 
 * Interface file for IProduct
 *
 * Creates the custom IProduct datatype
 *
 * Promotes strong typing in applications
 * An interface name must be imported in the component where it is used.
*/

/* 
 * IProduct interface
 *
 * Defines the data type properties, methods, and their types
 * Exported so that it can be used anywhere in application
 *
*/
export interface IProduct {
	productId: number;
	productName: string;
	productCode: string;
	releaseDate: string;
	price: number;
	description: string;
	starRating: number;
	imageUrl: string;
}