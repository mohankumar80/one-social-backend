const User = require('../models/users.model');
const Post = require('../models/posts.model');

const myPosts = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).populate({
			path: "posts",
			populate: { path: "userId" }
		})
		const posts = user.posts;
		const normalizedPosts = posts.map(post => {
			const { _id, name, username } = post._doc.userId;
			return { ...post._doc, userId: { _id, name, username } }
		})
		res.status(200).json({ success: true, posts: normalizedPosts })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to get all posts' })
	}
}

module.exports = myPosts;