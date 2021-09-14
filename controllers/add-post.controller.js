const User = require('../models/users.model');
const Post = require('../models/posts.model');

const addPost = async (req, res) => {
	try {
		const { userId } = req.params;
		const { content } = req.body;
		const newPost = { content, likes: 0, userId };
		const user = await User.findById(userId);
		const NewPost = await Post(newPost).populate('userId');
		NewPost.save();
		user.posts.push(NewPost._id);
		user.save();
		res.status(200).json({ success: true, post: NewPost })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to add the post' })
	}
}

module.exports = addPost;