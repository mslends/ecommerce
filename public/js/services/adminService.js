angular.module("ecommerce").service("adminService", function($http, $q) {



  var baseUrl = 'http://localhost:7575/';

  this.saveNewProduct = function(product) {
    return $http({
      method: 'POST',
      url: baseUrl + 'api/products',
      data: product
    })
  };

  this.updateProduct = function(product, id) {
    return $http({
      method: 'PUT',
      url: baseUrl + 'api/products/' + id,
      data: product
    }).then(function(response) {
        return response;
    });
  };


  this.deleteProduct = function(product) {
    return $http({
      method: 'DELETE',
      url: baseUrl + 'api/products/' + product._id
    }).then(function(response) {
        return response;
    });
  };

});
