'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('./user.model');

router.param('id', function (req, res, next, id) {
	User.findById(id).exec()
	.then(function (user) {
		if (!user) throw HttpError(404);
		req.requestedUser = user;
		next();
	})
	.then(null, next);
});

router.get('/', function (req, res, next) {
	User.find({}).exec()
	.then(function (users) {
		res.json(users);
	})
	.then(null, next);
});

router.post('/', function (req, res, next) {
	User.create(req.body)
	.then(function (user) {
		res.status(201).json(user);
	})
	.then(null, next);
});

router.get('/:id', function (req, res, next) {
	req.requestedUser.getStories()
	.then(function (stories) {
		var obj = req.requestedUser.toObject();
		obj.stories = stories;
		res.json(obj);
	})
	.then(null, next);
});

router.put('/:id', function (req, res, next) {
	_.extend(req.requestedUser, req.body);
	req.requestedUser.save()
	.then(function (user) {
		res.json(user);
	})
	.then(null, next);
});

router.delete('/:id', function (req, res, next) {
	req.requestedUser.remove()
	.then(function () {
		res.status(204).end();
	})
	.then(null, next);
});

router.post('/login', function(req, res, next) {
	console.log(req.body);
  User.findOne(req.body)
    .then(function(user) {
    	console.log(user);
      req.session.userId = user._id;
      res.status(201).json(user);
    })
    .then(null, next);
});

router.post('/signup/entry', function(req, res, next) {
  console.log(req.body);
  User.findOne({email: req.body.email})
    .then(function(user) {
      if (user) {
        res.send('This email is already in use!');
      }
      else if (req.body.email && req.body.password) {
        var newUser = req.body;
        User.create(newUser).then(function(user){
        	req.session.userId = user._id;
       	 	res.status(201).json(newUser);
        })
      }
    })
    .then(null, next);
});

module.exports = router;
