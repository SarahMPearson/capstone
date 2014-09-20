'use strict';

var Mongo  = require('mongodb');

function Beer(){
  this.glass = '/img/pint.jpg';
}

Object.defineProperty(Beer, 'collection', {
  get: function(){return global.mongodb.collection('beers');}
});

Beer.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Beer.collection.findOne({_id:_id}, cb);
};


module.exports = Beer;

