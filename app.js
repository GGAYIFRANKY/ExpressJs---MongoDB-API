const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();

//Import routes
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoute);



//Middleware --- function that executes when routes are hit
// app.use('/posts', (req, res) => {
// 	console.log('This is a middleware running');
// });



//ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to Express and MongoDB API applicaion');
});




//Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => {
	console.log("Connected to DB");
});

//Listening to server
app.listen(3000);