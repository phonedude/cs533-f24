const express = require("express");
const { createReadStream } = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));


// Drums Endpoint
app.get("/drums", (req, res) => {
  res.cookie("favDrummer", "Beauford");
  createReadStream(path.join(__dirname, "public", "drums.html")).pipe(res);
});

// Comedy Endpoint
app.get("/comedy", (req, res) => {
  res.cookie("favComedian", "Gillis");
  createReadStream(path.join(__dirname, "public", "comedy.html")).pipe(res);
});

// Video Game Endpoint
app.get("/videogames", (req, res) => {
  res.cookie("favGame", "Cyberpunk");
  createReadStream(path.join(__dirname, "public", "videogames.html")).pipe(res);
});

// Music Endpoint
app.get("/music", (req, res) => {
  res.cookie("favSinger", "Ferrell");
  createReadStream(path.join(__dirname, "public", "music.html")).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
