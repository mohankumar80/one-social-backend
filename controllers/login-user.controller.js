const User = require('../models/users.model');

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username }).populate(['followers', 'following', 'posts', 'liked', 'comments']);
		if(user.password !== password) {
			return res.status(400).json({ success: false, message: 'please enter the correct password' })
		}
		res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, message: 'user does not exist!! failed to login' })
	}
}

module.exports = loginUser;