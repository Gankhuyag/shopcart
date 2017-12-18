 
var helloApp = angular.module("myApp", []);

helloApp.controller("myCtrl", function($scope) {

$scope.products = [
                    { 'name':'Infosys Technologies',
                    	'price': 125000
                    	 },
                    	{ 'name':'Cognizant Technologies',
	                    	'price': 100000,
	                    	},
	                       ];
$scope.addProduct = function(){		
	$scope.products.push({ 'name':$scope.name, 'price': $scope.price });
	$scope.name='';
	$scope.price='';
	//$scope.headoffice='';
};
 });
 