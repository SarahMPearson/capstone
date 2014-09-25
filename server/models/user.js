'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb'),
    _      = require('underscore');

function User(o){
  this.email      = o.email;
  this.password   = o.password;
  this.beenThere  = [];
  this.loveIt     = [];
  this.hateIt     = [];
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, function(err, object){
    if(!object){return cb();}

    var user = Object.create(User.prototype);
    user = _.extend(user, object);
    cb(err, user);
  });
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    var oNew=new User(o);
    if(user || o.password.length < 3){return cb();}
    oNew.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(oNew, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.prototype.save = function(cb){
  User.collection.save(this, cb);
};

User.prototype.addLoveIt = function(beerId, cb){
  this.loveIt.push(beerId);
  User.collection.save(this, function(err, beerId){
  });
};

User.prototype.addHateIt = function(beerId, cb){
  this.hateIt.push(beerId);
  User.collection.save(this, function(err, beerId){
  });
};




module.exports = User;

