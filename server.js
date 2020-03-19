// Require Express, CORS, Mongoose, Morgan, and Path
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

// Require dotenv to load environment variables
require('dotenv').config();

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware / setting CORS
app.use(cors());

// Use morgan to log all requests to the console
app.use(morgan('dev'));

// Use express body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize MongoDB URI and connect to database
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).catch(err => {
    console.log(err);
});
mongoose.connection.once('open', () => {
    console.log('>>> Connected to MongoDB successfully');
});

// Initialize API routes
const indexRouter = require('./api/routes/index.router');

// Use API routes
app.use('/', indexRouter);

// Start up server
app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});
