const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const initializeDBConnection = require('./db/db.connect');
const usersRouter = require('./routers/users.router');

initializeDBConnection();

app.get('/', (req, res) => {
	res.json({ success: true, message: 'welcome to social media backend' })
})

app.use('/user', usersRouter);

/*
404 - NOT FOUND
DO NOT MOVE IT FROM HERE
*/
app.all('*', (req, res) => {
	res.status(404).json({ success: false, message: 'the route you are looking for does not exist!!' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
	console.log(`server started on port: ${PORT}`);
})