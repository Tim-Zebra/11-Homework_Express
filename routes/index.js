// Hub for all current and future routers
// Imports
const exp = require('constants');
const express = require('express');

// Import our modular routers for notes router
const notesRouter = require('./notes');

const app = express();

// Adds the notes router to our index. 
app.use('/notes', notesRouter);

module.exports = app;