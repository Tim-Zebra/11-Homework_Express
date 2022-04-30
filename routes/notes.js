const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// required for delete option
const notesArr = require('../db/db.json');
console.log('notesArr', notesArr);

console.log('\n ------Routes: Notes.js------- \n');

// GET Route for retrieving stored notes
notesRouter.get('/', (req, res) => {
  console.log('\nGET was called in Notes.js\n', req.method);
  readFromFile('/db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notesRouter.post('/notes', (req, res) => {
  console.log('\n POST was called in Notes.js\n');
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
        title,
        text,
        id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 📝`);
  } else {
    res.error('Error in adding note ❌');
  }
});

// DELETE Route to delete a note based off id
notesRouter.delete('/notes/:id', (req, res) => {
  console.log('\n DELETE was called in Notes.js\n');  
  if (req.params.id) {
      console.info(`${req.method} request received to delete a note`);
      const noteId = req.params.id;
      for (let i = 0; i < notesArr.length; i++) {
        const currentNote = notesArr[i];
        if (currentNote.id === noteId) {
            // removes 1 note from note array at given index
            notesArr.splice(i, 1);
            res.json(`You have successfully deleted`, currentNote);
            return;
        }
      }
        res.status(404).send('Note not found');
    } else {
        res.status(400).send('Note ID not provided');
    }
  });

module.exports = notesRouter;