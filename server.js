// required dependencies
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var productsCtrl = require('./server/controllers/products.server.ctrl');


// Setting up my express app
var app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/ecommerce', function(err) {
    if (err) {
      throw err
    } else {
      console.log("Mongoose server connected!");
    }
});

// serving up front-end files from the public folder.
app.use(express.static(__dirname + '/public'));
// Setup of my mongoDB Database
// var db = mongojs('ecommerce');

// Setup of a collection in my database
// var productsCollection = db.collection('products');
// var productId = mongojs.ObjectId;



// Endpoints
// app.get('/api/products', function(req, res){
//   var query = req.query;
//   productsCollection.find(query, function(err, response){
//     if(err) {
//       res.status(500).json(err);
//     } else {
//       res.json(response);
//     }
//   });
// });
//
// app.get('/api/products/:id', function(req, res){
//   console.log("hit!");
//   var idObj = {
//     _id: req.params.id
//   };
//   productsCollection.findOne({_id:productId(req.params.id)}, function(err, response){
//     if(err) {
//       res.status(500).json(err);
//     } else {
//       res.json(response);
//     }
//   });
// });
//
// app.post('/api/products', function(req, res){
//   productsCollection.save(req.body, function(error, response){
// 		if(error) {
// 			return res.status(500).json(error);
// 		} else {
// 			return res.json(response);
// 		}
// 	});
// });
//
// app.put('/api/products/:id', function(req, res){
//   // if(!req.params.id){
// 	// 	return res.status(400).send('id query needed');
// 	// }
// 	var query = {
// 		_id: productId(req.params.id)
// 	};
// 	productsCollection.update(query, req.body, function(error, response){
//     return res.send(response);
// 		// if(error) {
// 		// 	return res.status(500).json(error);
// 		// } else {
// 		// 	return res.send(response);
// 		// }
// 	});
// });
//
// app.delete('/api/products/:id', function(req, res){
//   if(!req.params.id){
// 		return res.status(400).send('id query needed');
// 	}
// 	var query = {
// 		_id: productId(req.params.id)
// 	};
// 	productsCollection.remove(query, function(error, response){
// 		if(error) {
// 			return res.status(500).json(error);
// 		} else {
// 			return res.json(response);
// 		}
// 	});
// });


app.get('/api/products', productsCtrl.getProducts)
app.get('/api/products/:id', productsCtrl.getProduct)
app.post('/api/products', productsCtrl.createProduct)
app.put('/api/products/:id', productsCtrl.editProduct)
app.delete('/api/products/:id', productsCtrl.deleteProduct)
// Set up port to listen on
var port = 7575;
app.listen(port, function() {
  console.log('Listening on port,' + port + '!');
});
