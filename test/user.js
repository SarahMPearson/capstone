/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    User      = require('../../app/models/user'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    Mongo     = require('mongodb'),
    db        = 'hoppy-test';

describe('User', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new user', function(){
      var o = {email: 'sue@aol.com', loveIt: [], hateIt: []},
          t = new User(o);
      expect(o).to.be.instanceof(User);
      expect(o.loveIt).to.have.length(0);
      expect(o.hateIt).to.have.length(0);
    });
  });

  describe('.all', function(){
    it('should get all trips', function(done){
      Trip.all(function(err, trips){
        expect(trips).to.have.length(2);
        done();
      });
    });
  });
  describe('.create', function(){
    it('should create a new trip', function(done){
      var o = {tripName: 'New York 2014', cash: '100', start: 'Denver', startLat:'41.65', startLng: '-71.87', startD: '8/23/2014', end: 'New York', endLat: '36.45', endLng: '-80.65', endD: '9/6/2014', mpg: '36', gasCost: '3.10'};
      Trip.create(o, function(err, trip){
        expect(trip._id).to.be.instanceof(Mongo.ObjectID);
        expect(trip.tripName).to.equal('New York 2014');
        expect(trip.cash).to.equal(100);
        expect(trip.start).to.equal('Denver'),
        expect(trip.startLat).to.equal(41.65);
        expect(trip.startLng).to.equal(-71.87);
        expect(trip.startD).to.be.instanceof(Date);
        expect(trip.end).to.equal('New York');
        expect(trip.endLat).to.equal(36.45);
        expect(trip.endLng).to.equal(-80.65);
        expect(trip.endD).to.be.instanceof(Date);
        expect(trip.mpg).to.equal(36);
        expect(trip.gasCost).to.equal(3.10);
        done();
      });
    });
  });

  describe('.findById', function(){
    it('should find one trip by its id', function(done){
      Trip.findById('000000000000000000000001', function(trip){
        expect(trip).to.be.instanceof(Trip);
        expect(trip.tripName).to.equal('Nashville');
        done();
      });
    });
  });

}); //last bracket

