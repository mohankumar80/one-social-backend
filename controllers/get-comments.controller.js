const User = require('../models/users.model');
const Post = require('../models/posts.model');

const getComments = async (req, res) => {
	try  {
		const { userId } = req.params;
		const user = await User.findById(userId).populate({
			path: 'comments',
			populate: { path: 'userId' },
		}).populate({
			path: "comments",
			populate: { path: 'comments.userId' }
		})
		const commentedPosts = user.comments;
		const normalizedCommentedPosts = commentedPosts.map(post => {
			const { _id, name, username } = post._doc.userId;
			return { ...post._doc, userId: { _id, name, username }}
		})
		res.status(200).json({ success: true, comments: normalizedCommentedPosts })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to get the comments' })
	}
}

module.exports = getComments;