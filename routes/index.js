const router = require('express').Router();
// Import our modular routers for notes router
const notesRouter = require('./notes');

console.log('\n -----Routers: index.js------ \n');

// Adds the notes router to our index. 
router.use('/notes', notesRouter);

module.exports = router;