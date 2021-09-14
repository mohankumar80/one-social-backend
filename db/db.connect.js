const mongoose = require('mongoose');

const DBCredentials = process.env['DB_Credentials']

const initializeDBConnection = async () => {
	try {
		await mongoose.connect(DBCredentials);
		console.log('successfully connected to the database');
	} catch (error) {
		console.log('failed to connect to the database');
	}
}

module.exports = initializeDBConnection;