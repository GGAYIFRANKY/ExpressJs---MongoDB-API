const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

//Get all the posts
router.get('/', async (req, res) => {
	try{
		const posts = await Post.find();

		res.json(posts);
	}catch(err){
		res.json({message: err});
	}
	//res.send('We are on the posts page');
});


//Adds a post
router.post('/', async(req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});

	try{
		const savedPost = await post.save()

		res.json(savedPost);

	}catch(err){
		res.json({
			message: err
		});
	};

	
	// .then(data => {
	// 	res.json(data);
	// })
	// .catch(err => {
	// 	res.json({
	// 		message: "Error"
	// 	})
	// })
});

//Getting back a specific post
router.get('/:postId', async (req, res) => {

	try{

		const post = await Post.findById(req.params.postId);

		res.json(post);

	}catch(err){
		res.json({
			message: err
		});
	}
})

//Delete a specific post

router.delete('/:postId', async (req, res) => {

	try{

		const post = await Post.remove({_id: req.params.postId});

		res.json({
			message: "Post deleted succesfully"
		});

	}catch(err){
		res.json({
			message: err
		});
	}
})

//Update a post
router.patch('/:postId', async (req, res) => {

	try{

		const updatedPost = await Post.updateOne({
			_id: req.params.postId}, {
				$set: {
					title: req.body.title
				}
			}
		);

		res.json(updatedPost);

	}catch(err){
		res.json({
			message: err
		});
	}
})

module.exports = router;