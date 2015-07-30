/**
 * Created by Denis on 4.7.2015..
 */
var initApp = angular.module('initApp',[
    'ngRoute',
    'ProductController'
]);
initApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        // Insert products into index ng-view part 1
        when('/',{
            templateUrl: 'partials/products.html',
            controller:  'ListPr'
        }).
        // Insert products and link products by ID and inject into homepage
        //whiteout reloading
       when('/products/:prID',{
            templateUrl: 'partials/product-details.html',
            controller:  'DetailsPr'
        }).
        otherwise({
            redirectTo: '/'
        })
}]);
