'use strict';


exports.index = function(req, res){
  res.send({beer:['Ale', 'Porter', 'Stout', 'Wheat', 'Hefe']});
};


