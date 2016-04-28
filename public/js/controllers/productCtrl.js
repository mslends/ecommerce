angular.module("ecommerce").controller('productCtrl', function($scope, productService) {
productService.getProducts().then(function(response) {
  $scope.products = response;
})



});
