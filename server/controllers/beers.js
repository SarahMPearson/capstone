'use strict';

var request = require('request'),
    apiKey  = '92230036d307c565c294e1e32ce932f7',
    Beer    = require('../models/beer'),
    User    = require('../models/user');


exports.find = function(req, res){

  request('http://api.brewerydb.com/v2/search/?key=' + apiKey + '&type=beer&q=' + req.params.beer, function(err, data, body){
    res.send(JSON.parse(data.body));
  });
};

exports.findBrew = function(req, res){
  request('http://api.brewerydb.com/v2/breweries/?key=' + apiKey + '&type=brewery&name=' + req.params.brewery, function(err, data, body){
    res.send(JSON.parse(data.body));
  });
};

exports.show = function(req, res){
  Beer.findById(req.body.beer.id, function(err, beer){
    res.send({beer:beer});
  });
};

exports.loveIt = function(req, res){
  User.findById(req.user._id, function(err, user){
    console.log('controller req.user.id', req.user._id);
    console.log('controller user', user);
    user.addLoveIt(req.params.beerId, function(err, beerId){
      console.log('controller beerId', beerId);
      res.send({beerId:beerId});
    });
  });
};

