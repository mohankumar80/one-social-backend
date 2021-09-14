const User = require('../models/users.model');
const Post = require('../models/posts.model');

const commentOnPost = async (req, res) => {
	try {
		const { userId, postId } = req.params;
		const { comment } = req.body;
		const post = await Post.findById(postId).populate('userId').populate({
			path: "comments",
			populate: { path: "userId" }
		})
		post.comments.push({ comment, userId })
		post.save()
		const user = await User.findById(userId);
		user.comments.push(postId);
		user.save()
		res.status(200).json({ success: true, post });
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to comment on the post' })
	}
}

module.exports = commentOnPost;