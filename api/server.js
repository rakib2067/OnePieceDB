const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

// const characterRoutes = require("./routes/characters");
// const fruitRoutes = require("./routes/fruits");
// server.use("/books", characterRoutes);
// server.use("/authors", fruitRoutes);

server.get("/", (req, res) => res.send("Welcome to the One Piece Database!"));

module.exports = server;
