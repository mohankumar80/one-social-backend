const User = require('../models/users.model');
const Post = require('../models/posts.model');

const deleteComment = async (req, res) => {
	try {
		const { userId, postId } = req.params;
		const { commentId } = req.body;
		const post = await Post.findById(postId);
		post.comments.pull(commentId)
		post.save()
		const user = await User.findById(userId);
		user.comments.pull(postId);
		user.save()
		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to comment on the post' })
	}
}

module.exports = deleteComment;