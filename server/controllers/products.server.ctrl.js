var mongoose = require('mongoose');
var Product = require('../models/productModel');

module.exports = {

  createProduct: function(req, res, next) {
    Product.create(req.body, function(error, response){
  		if(error) {
  			return res.status(500).json(error);
  		} else {
  			return res.json(response);
  		}
    });
  },

  getProducts: function(req, res){
    var query = req.query;
    Product.find(query, function(err, response){
      if(err) {
        res.status(500).json(err);
      } else {
        res.json(response);
      }
    });
  },


  getProduct: function(req, res){
    Product.findById(req.params.id, function(err, response){
      if(err) {
        res.status(500).json(err);
      } else {
        res.json(response);
      }
    });
  },


  editProduct: function(req, res){
  	Product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
      return res.send(response);
  		if(error) {
  			return res.status(500).json(error);
  		} else {
  			return res.send(response);
  		}
  	});
  },


  deleteProduct: function(req, res){
  	Product.findByIdAndRemove(req.params.id, function(error, response){
  		if(error) {
  			return res.status(500).json(error);
  		} else {
  			return res.json(response);
  		}
  	});
  }

}
