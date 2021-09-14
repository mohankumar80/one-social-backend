const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
	name: {
		type: String,
		required: [true, 'every person got a name!!']
	},
	username: {
		type: String,
		unique: true,
		required: [true, 'you gotta have a username']
	},
	password: {
		type: String,
		required: true
	},
	email: String,
	about: String,
	followers: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'User',
		}
	],
	following: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'User'
		}
	],
	feed: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Post'
		}
	],
	posts: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Post'
		}
	],
	liked: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Post'
		}
	],
	comments: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Post'
		}
	]
})

const User = mongoose.model('User', usersSchema);

module.exports = User;