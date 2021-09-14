const User = require('../models/users.model');
const Post = require('../models/posts.model');

const deletePost = async (req, res) => {
	try {
		const { userId, postId } = req.params;
		const user = await User.findById(userId);
		user.posts.pull(postId)
		user.save()
		await Post.findOneAndDelete({ _id: postId })
		res.status(400).json({ success: true, posts: user.posts })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to delete the post' })
	}
}

module.exports = deletePost;