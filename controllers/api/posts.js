var Post = require("../../models/post");
var router = require('express').Router();

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
	console.log("This is the post username: " + post.username);
	console.log("This is the post body: " + post.textbody);
	post.save(function(err,post) {
		if(err) { return next(err); } 
		res.status(201).json(post);
		console.log("Posted to Database!!");
	});
});

module.exports = router;