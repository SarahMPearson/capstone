'use strict';

var request = require('request'),
    apiKey  = '92230036d307c565c294e1e32ce932f7';


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

