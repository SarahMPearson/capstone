'use strict';

var request = require('request'),
    apiKey  = '92230036d307c565c294e1e32ce932f7',
    Beer    = require('../models/beer'),
    //Mongo   = require('mongodb'),
    User    = require('../models/user');


exports.find = function(req, res){

  request('http://api.brewerydb.com/v2/search/?key=' + apiKey + '&type=beer&q=' + req.params.beer, function(err, response, body){
    res.send(JSON.parse(response.body));
  });
};

exports.show = function(req, res){
  Beer.findById(req.body.beer.id, function(err, beer){
    res.send({beer:beer});
  });
};
exports.showDash = function(req, res){
  console.log('Controller req.params id', req.user.beer._id);
  Beer.findById(req.user.beer._id, function(err, beer){
    res.send({beer:beer});
  });
};

exports.loveIt = function(req, res){
  User.findById(req.user._id, function(err, user){
   //console.log('controller req.user.id', req.user._id);
   //console.log('controller user', user);
   user.addLoveIt(req.body);
   res.send({user:user});
 });
};

exports.hateIt = function(req, res){
  User.findById(req.user._id, function(err, user){
    user.addHateIt(req.body);
    res.send({user:user});
  });
};

exports.delBeer = function(req, res){
  User.findById(req.user._id, function(err, user){
    user.delLoveBeer(req.params.beerId, function(){
      res.send({user:user});
    });
  });
};
