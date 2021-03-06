'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    debug          = require('../lib/debug'),
    security       = require('../lib/security'),
    home           = require('../controllers/home'),
    beers          = require('../controllers/beers'),
    users          = require('../controllers/users');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}}));

  app.use(security.authenticate);
  app.use(debug.info);

  app.get('/home', home.index);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.use(security.bounce);
  app.delete('/logout', users.logout);
  app.get('/search/:beer', beers.find);
  app.get('/beer/:beerId', beers.show);
  app.post('/loveit', beers.loveIt);
  app.post('/hateit', beers.hateIt);
  app.get('/dashboard', users.index);
  app.get('/dashboard', beers.showDash);
  app.delete('/dashboard/:beerId', beers.delBeer);


  console.log('Express: Routes Loaded');
};

