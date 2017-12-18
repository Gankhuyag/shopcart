import { Component, OnInit } from '@angular/core';
import { Product }    from './product';
import * as angular from "angular";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})




export class ProductComponent   {
  olist: Array<Product>=[];
 
  


  constructor() {
    this.olist =[{id:1,name:'Java 9.0',price:15.00,url:"/assets/images/1.JPG"},
               {id:2,name:'Angular JS',price:19.00,url:"/assets/images/2.JPG"},
               {id:3,name:'Spring ',price:10.50,url:"/assets/images/3.JPG"},
               {id:4,name:'Ruby sand',price:12.30,url:"/assets/images/4.JPG"},
               {id:5,name:'Ruby sand',price:12.30,url:"/assets/images/4.JPG"},
               {id:5,name:'Ruby sand',price:12.30,url:"/assets/images/4.JPG"} ];
                var products = [{name:'',price:0}];
               
   //this.myHero = 'Windstorm';
  
}
//const mApp = angular.module("myApp", []);

/*mApp.controller('myCtrl', function($scope) {

$scope.products = [];

$scope.addProduct= function () {

    $scope.products.push({name:$scope.name, price:$scope.priceProduct});
    $scope.nameProduct = "";
    $scope.priceProduct = "";
 }
});*/

  
//model = new Product(18, this.types[0], 'IPhone 8 ',12.00, 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

/*app = angular.module('myApp', []);

const helloApp = angular.module("helloApp", []);

helloApp.controller("CompanyCtrl", function($scope) {
$scope.companies = [
                    { 'name':'Infosys Technologies',
                    	'employees': 125000,
                    	'headoffice': 'Bangalore'},
                    	{ 'name':'Cognizant Technologies',
	                    	'employees': 100000,
	                    	'headoffice': 'Bangalore'},
	                    	{ 'name':'Wipro',
		                    	'employees': 115000,
		                    	'headoffice': 'Bangalore'},
		                    	{ 'name':'Tata Consultancy Services (TCS)',
			                    	'employees': 150000,
			                    	'headoffice': 'Bangalore'},
			                    	{ 'name':'HCL Technologies',
				                    	'employees': 90000,
				                    	'headoffice': 'Noida'},
                    ];
$scope.addRow = function(){		
	$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
	$scope.name='';
	$scope.employees='';
	$scope.headoffice='';
};
)};



/*addProduct()
{

console.log("Hello there?");
this.products.push({name:$scope.name, price:$scope.price});

}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
});*/

// TODO: Remove this when we're done
//get diagnostic() { return JSON.stringify(this.model); }

/*newProduct() {
this.model = new Product(42, this.types[0],'Boot', 15.00,'Leather from Mongolia');
}

skyDog(): Product {
let myProduct =  new Product(42, this.types[0],'Boot',
                 18.00,
                 'Leslie Rollover, Fetch any object at any distance');
console.log('My product is called ' + myProduct.name); // "My hero is called SkyDog"
return myProduct;
}

//////// NOT SHOWN IN DOCS ////////
// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls['name'] &&
form.controls['name'].value; // Dr. IQ
}*/


  


}
