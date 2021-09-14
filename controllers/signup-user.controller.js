const User = require('../models/users.model');

const signupUser = async (req, res) => {
	try {
		const userDetails = req.body;
		const findUser = await User.findOne({ username: userDetails.username });
		if(findUser) {
			return res.status(400).json({ success: false, message: 'user already exists. please login' })
		}
		const NewUser = await User(userDetails);
		NewUser.save();
		res.status(200).json({ success: true, user: NewUser })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to signup' })
	}
}

module.exports = signupUser;