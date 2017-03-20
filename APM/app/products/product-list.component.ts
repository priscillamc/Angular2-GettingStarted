/* 
 * Component file for the ProductList Component
 *
 * Displays a list of products
 * Class name must also be included in the module's declarations array
*/

/* Uses the Angular component decorator and the OnInit lifecycle hook */
import { Component, OnInit } from '@angular/core';

/* Uses the custom IProduct interface/datatype */
import { IProduct } from './product';

/* 
 * Component decorator function, defines the metadata for the component 
 *
 * Passed an object with the following properties:
 * 	selector: string 	- name of the directive used in HTML, Example: <pm-products></pm-products>
 * 	moduleId: module.id - specify to use component-relative paths
 * 	templateUrl: string - path to the external HTML that replaces the pm-products tag
 * 	style: array 		- inline style strings
 * 	styleUrls: array 	- paths to stylesheets, they only apply to this component
*/
@Component({
    selector: 'pm-products' ,
	moduleId: module.id, 
    templateUrl: 'product-list.component.html',
	styleUrls: ['product-list.component.css']
})
/* 
 * ProductListComponent class
 *
 * Exported so that it can be used anywhere in application
 *
 * Implements OnInit, so transform() method is required.
 * A class must have code for every property and method of the interface that it implements.
 *
*/
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	listFilter: string = 'cart';
    products: IProduct[] = [
		{
			"productId": 1,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",
			"releaseDate": "March 19, 2016",
			"description": "Leaf rake with 48-inch wooden handle.",
			"price": 19.95,
			"starRating": 3.2,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
		},
		{
			"productId": 2,
			"productName": "Garden Cart",
			"productCode": "GDN-0023",
			"releaseDate": "March 18, 2016",
			"description": "15 gallon capacity rolling garden cart",
			"price": 32.99,
			"starRating": 4.2,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
		},
		{
			"productId": 5,
			"productName": "Hammer",
			"productCode": "TBX-0048",
			"releaseDate": "May 21, 2016",
			"description": "Curved claw steel hammer",
			"price": 8.9,
			"starRating": 4.8,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
		},
		{
			"productId": 8,
			"productName": "Saw",
			"productCode": "TBX-0022",
			"releaseDate": "May 15, 2016",
			"description": "15-inch steel blade hand saw",
			"price": 11.55,
			"starRating": 3.7,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
		},
		{
			"productId": 10,
			"productName": "Video Game Controller",
			"productCode": "GMG-0042",
			"releaseDate": "October 15, 2015",
			"description": "Standard two-button video game controller",
			"price": 35.95,
			"starRating": 4.6,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
		}
    ];
	
	toggleImage(): void {
		this.showImage = !this.showImage;
	}
	
	ngOnInit(): void {
		console.log('In OnInit');
	}
}