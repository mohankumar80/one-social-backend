const User = require('../models/users.model');
const Post = require('../models/posts.model');

const getAllPostComments = async (req, res) => {
    try {
        const { userId, postId } = req.params;
        const post = await Post.findById(postId).populate('userId').populate({
            path: 'comments',
            populate: { path: 'userId' }
        })
        res.status(200).json({ success: true, post })
    } catch {
        res.status(400).json({ success: false, message: 'failed to get all post comments' })
    }
}

module.exports = getAllPostComments;