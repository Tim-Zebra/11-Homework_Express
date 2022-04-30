const exp = require('constants');
const express = require('express');
// Import our modular routers for notes router
const notesRouter = require('./notes');

console.log('\n -----Routers: index.js------ \n');

const app = express();

// Adds the notes router to our index. 
app.use('/notes', notesRouter);

module.exports = app;