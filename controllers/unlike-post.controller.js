const User = require('../models/users.model');
const Post = require('../models/posts.model');

const unlikePost = async (req, res) => {
	try {
		const { userId, postId } = req.params;
		const post = await Post.findById(postId);
		post.likes -= 1;
		post.save();
		const user = await User.findById(userId);
		user.liked.pull(post._id);
		user.save()
		res.status(200).json({ success: true, likes: post })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to like the post' })
	}
}

module.exports = unlikePost;