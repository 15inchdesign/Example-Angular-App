/**
 * Created by Denis on 4.7.2015..
 */
    //First $http req
var ProductController = angular.module('ProductController',[]);
ProductController.controller ('ListPr',['$scope','$http',function($scope, $http){
    $http.get('js/products.json').success(function(pull){
        $scope.listProducts = pull;
    });
}]);
 // Controller for links,well we need an a ID make new req to json
ProductController.controller('DetailsPr', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('js/products.json').success(function(pull){
            $scope.listProducts = pull;
            $scope.wProduct = $routeParams.prID;
        })

}
]);


