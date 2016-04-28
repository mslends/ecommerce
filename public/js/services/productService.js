angular.module("ecommerce").service("productService", function($http, $q) {

var baseUrl = 'http://localhost:7575/'


this.getProducts = function() {
  return $http({
    method: 'GET',
    url: baseUrl + 'api/products'
  }).then(function(response) {
      return response.data;
  });
};

});
