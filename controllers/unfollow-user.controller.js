const User = require('../models/users.model');
const Post = require('../models/posts.model');

const unfollowUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const { toBeUnfollowedUserID } = req.body;
		const user = await User.findById(userId);
		user.following.pull(toBeUnfollowedUserID);
		user.save();
		const unfollowedUser = await User.findById(toBeUnfollowedUserID);
		unfollowedUser.followers.pull(userId);
		unfollowedUser.save();
		res.status(200).json({ success: true, following: user.following })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to unfollow the user' })
	}
}

module.exports = unfollowUser;