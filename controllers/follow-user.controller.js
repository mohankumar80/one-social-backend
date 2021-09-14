const User = require('../models/users.model');
const Post = require('../models/posts.model');

const followUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const { toBeFollowedUserID } = req.body;
		const user = await User.findById(userId);
		user.following.push(toBeFollowedUserID);
		user.save();
		const followedUser = await User.findById(toBeFollowedUserID);
		followedUser.followers.push(userId);
		followedUser.save();
		res.status(200).json({ success: true, following: user.following })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to follow the user' })
	}
}

module.exports = followUser;