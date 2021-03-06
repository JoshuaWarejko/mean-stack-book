var Post = require("../../models/post");
var router = require('express').Router();
var websockets = require('../../websockets');

router.get('/', function(req,res,next) {
	Post.find()
	.sort('-date')
	.exec(function(err,posts) {
		if(err) { return next(err) }
			res.status(200).json(posts);
	}); 
});

router.post('/', function(req,res,next) {
	var post = new Post({
		username: req.body.username,
		textbody: req.body.textbody
	});
	post.save(function(err,post) {
		if(err) { return next(err); } 
		res.status(201).json(post);
	});
});

router.post('/', function(req,res,next) {
	var post = new Post({textbody: req.body.textbody});
	post.username = req.auth.username;
	post.save(function(err,post) {
		if(err) { return next(err) }
		websockets.broadcast('new_post', post);
		res.sendStatus(201).json(post);
	})
})

module.exports = router;