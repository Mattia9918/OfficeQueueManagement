'use strict';

const express = require('express');
const morgan = require('morgan'); // logging middleware

const { check, validationResult } = require('express-validator'); // validation middleware
const dao = require('./dao');

// init express
const app = new express();
const port = 3001;

// set-up the middlewares
app.use(morgan('dev'));
app.use(express.json());

/*** APIs ***/

