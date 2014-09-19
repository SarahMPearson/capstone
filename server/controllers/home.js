'use strict';

var request = require('request');

exports.index = function(req, res){
  res.send({mean:['Ale', 'Porter', 'Stout', 'Wheat']});
};

exports.find = function(req, res){

  request('http://api.brewerydb.com/v2/search/?key=92230036d307c565c294e1e32ce932f7&type=beer&q=' + req.params.beer, function(err, data, body){
    res.send(JSON.parse(data.body));
  });

};

