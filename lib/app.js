const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(bodyParser.json());

// route locations
const pets = require('./routes/pets');
const raves = require('./routes/raves');

// routes
app.use('/api/pets', pets);
app.use('/api/raves', raves);

app.use(errorHandler());

module.exports = app;