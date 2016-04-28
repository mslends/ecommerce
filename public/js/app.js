angular.module("ecommerce", ['ui.router'])
.config(function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/products');
        	$stateProvider
        	.state('products', {
        		url: '/products',
            templateUrl: '/views/productView.html',
        		controller: 'productCtrl'
      	})
          .state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminCtrl'
        })

        $urlRouterProvider.otherwise('/products')
    });
