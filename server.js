// Imports functions and other routes
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Starts port for Heroku
const PORT = process.env.PORT;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Built in middleware for 'express'
app.use(express.static('public'));

// Routes to HTML
// index.html route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
  console.log('\n GET "/" was called \n');
});

// notes.html route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
  console.log('\n GET "/notes" was called \n');
});

// starts server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
