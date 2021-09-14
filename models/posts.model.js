const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentsSchema = require('./comments.model');

const postsSchema = new Schema({
	content: {
		type: String,
		required: [true, 'post got to have content']
	},
	likes: {
		type: Number,
		required: true
	},
	userId: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	comments: [ commentsSchema ]
})

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;