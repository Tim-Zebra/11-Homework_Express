const router = require('express').Router();
// Import our modular routers for notes router
const notesRouter = require('./notes');

console.log('\nRouter: index.js was routed to\n');

// Adds the notes router to our index. 
router.use('/notes', notesRouter);

module.exports = router;