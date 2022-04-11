const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

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
const db = new Database("./src/database.db", {
  //  to show data base logs in console
  verbose: console.log,
});

// api endpoints
server.get("/", (req, res) => {
  // get all entries
  //SELECT * FROM entries
  //[{id: 1, description: 'test', mood: 'happy'}, {id: 2, description: 'test2', mood: 'sad'}]
  const response = [{ name: "Sofía" }, { name: "María" }]
  ;
  res.json(response);
});

server.post("/create-entry", async (req, res,next) => {
  const moods = ["happy", "sad", "angry"];
  try {
    console.log(req.body);
    if (req.body.description !== "" && req.body.mood !== "" && moods.includes(req.body.mood)) {
      // get current date
      const date = new Date().toISOString();

      const insertEntry = db.prepare(
        "INSERT INTO entries (createdAt, description, mood) VALUES (?,?, ?)"
      );

      await insertEntry.run(date, req.body.description, req.body.mood);

      const responseSuccess = {
        success: true,
      };
      res.json(responseSuccess);
    } else {
      throw new Error("description and mood are required");
    }
  } catch (error) {
    next(error)
  }
});

server.put("/update-entry", async (req, res, next) => {
  try{
  const id = req.body.id;
  const entry = [req.body.description, req.body.mood];
  const updatedEntry =
    "UPDATE entries SET description = ?, mood = ? WHERE (id = ?)";
  await db.run(updatedEntry);
  }
  catch(error){
    next(error)
  }
});


server.use((error, req, res, next) => {
  res.status(500).json({
    success: false,
    error: error.message,
  });
})