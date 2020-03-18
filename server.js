const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Use morgan to log all requests to the console
app.use(morgan('dev'));

// Use express body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET / successful'
    });
});

app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});