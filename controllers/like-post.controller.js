const User = require('../models/users.model');
const Post = require('../models/posts.model');

const likePost = async (req, res) => {
	try {
		const { userId, postId } = req.params;	
		const post = await Post.findById(postId);
		post.likes += 1;
		post.save();
		const user = await User.findById(userId);
		if(!user.liked.includes(postId)) {
			user.liked.push(post._id)
		}
		user.save()
		res.status(200).json({ success: true, likes: post })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to like the post' })
	}
}

module.exports = likePost;