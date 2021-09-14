const User = require('../models/users.model');
const Post = require('../models/posts.model');

const searchUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const { username } = req.body;
		const user = await User.findById(userId);
		const users = await User.find({ username })
		.populate({
			path: "posts",
			populate: { path: "userId" }
		})
		res.status(200).json({ success: true, users })
	} catch (error) {
		res.status(404).json({ success: false, message: 'unable to find the user' })
	}
}

module.exports = searchUser;