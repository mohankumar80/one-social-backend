const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema({
	comment: {
		type: String,
		required: [true, 'you have commented right'],
	},
	userId: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
})

module.exports = commentsSchema;