angular.module("ecommerce").controller('adminCtrl', function($scope, adminService, productService) {


  $scope.saveNewProduct = function(product) {
    adminService.saveNewProduct(product);
    $scope.getProducts();
  };


  $scope.getProducts = function() {
    productService.getProducts().then(function(response) {
      console.log(response);
      return $scope.products = response;

    });
  };
  $scope.getProducts();



  $scope.updateProduct = function(updatedProduct, product) {

		var productToEdit = product;

		if(updatedProduct.product && updatedProduct.price && productToEdit._id) {
			adminService.updateProduct(updatedProduct, productToEdit._id);
			alert("You updated " + productToEdit.product + ' ' + productToEdit.price + ' to ' + updatedProduct.product + ' ' + updatedProduct.price + '.')

		}else if(!updatedProduct.product && updatedProduct.price) {
			updatedProduct.product = product.product;
			adminService.updateProduct(updatedProduct, productToEdit._id);
			alert("Changed price to $" + updatedProduct.price + '.');


		}else if(!updatedProduct.price && updatedProduct.product) {
			updatedProduct.price = product.price;
      adminService.updateProduct(updatedProduct, productToEdit._id);
      alert("Changed product product to " + updatedProduct.product + '.');
		}

		else {
			alert("Make sure to enter a value to edit this product.")
		}
      $scope.getProducts();
	}



  $scope.deleteProduct = function(product) {
    adminService.deleteProduct(product).then(function(response) {
      $scope.getProducts();
    })
  }


});
