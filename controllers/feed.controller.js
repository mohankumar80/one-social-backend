const User = require('../models/users.model');
const Post = require('../models/posts.model');

const getFeed = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId);
		const allPosts = await Post.find().populate('userId').populate({
			path: "comments",
			populate: { path: "userId" }
		});
		const noramlizedPosts = allPosts.map(post => {
			const { _id, name, username } = post._doc.userId;
			return { ...post._doc, userId: { _id, name, username } }
		})
		const userFollowing = user.following;
		const usersFeed = [] ;
		userFollowing.map(followingUserId => {
			return noramlizedPosts.filter(post => {
				if(String(post.userId._id) === String(followingUserId)) {
					usersFeed.push(post)
				}
			})
		})
		res.status(200).json({ success: true, feed: usersFeed })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to get user feed' })
	}
}

module.exports = getFeed;8