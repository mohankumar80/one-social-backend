const User = require('../models/users.model');

const getAllFollowing = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).populate({
			path: "following",
			populate: { path: "posts" },
		})
		const following = user.following;
		const userFollowing = following.map(post => {
			const { _id, name, username, posts } = post._doc;
			return { _id, name, username, posts }
		})
		res.status(200).json({ success: true, following: userFollowing })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to get all following users' })
	}

}

module.exports = getAllFollowing;