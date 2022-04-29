const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const notesArr = require('.db/db');

// GET Route for retrieving stored notes
notes.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/api/notes', (req, res) => {
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
notes.delete('/api/notes/:id', (req, res) => {
    if (req.params.id) {
      console.info(`${req.method} request received to delete a note`);
      const noteId = req.params.id;
      for (let i = 0; i < notesArr.length; i++) {
        const currentNote = notesArr[i];
        if (currentNote.id === reviewId) {
          res.json(currentNote);
          return;
        }
      }
      res.status(404).send('Note not found');
    } else {
      res.status(400).send('Note ID not provided');
    }
  });

module.exports = notes;