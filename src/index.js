const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const server = express();

// set express middleware
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  //  to show data base logs in console
  verbose: console.log,
});

// api endpoints
server.get('/', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }],
  };
  res.json(response);
});

server.post('/create-entry', (req, res) => {
  console.log(req.body);
  if (req.body.description !== '' && req.body.mood !== '') {
    // get current date
    const date = new Date().toISOString();

    const insertEntry = db.prepare(
      'INSERT INTO entries (createdAt, description, mood) VALUES (?,?, ?)'
    );

    insertEntry.run(date, req.body.description, req.body.mood);

    const responseSuccess = {
      success: true,
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Error',
    };
    res.json(responseError);
  }
});

server.put('/update-entry/:id', (req, res) => {
  const id = req.params.id;
  const entry = [req.body.description, req.body.mood];
  const updatedEntry =
    'UPDATE entries SET description = ?, mood = ? WHERE (id = ?)';
  db.run(updatedEntry);
});
