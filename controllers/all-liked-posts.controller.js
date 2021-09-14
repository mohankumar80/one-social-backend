const User = require('../models/users.model');

const getAllLikedPosts = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).populate({
			path: "liked",
			populate: { path: "userId" },
		});
		const likedPosts = user.liked;
		const normalizedLikedPosts = likedPosts.map(post => {
			const { _id, name, username } = post._doc.userId;
			return { ...post._doc, userId: { _id, name, username } }
		})
		res.status(200).json({ success: true, likes: normalizedLikedPosts })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to get all liked posts' });
	}
}

module.exports = getAllLikedPosts;