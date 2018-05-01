const express = require("express");
const path = require("path");

const app = express();

const assets = path.join(__dirname, "../assets");
const view = path.join(__dirname, "../public");

app.use(express.static(assets));
app.use(express.static(view));

const port = process.env.PORT || 9000;
app.set("port", port);

app.get("/", (req, res) => res.sendFile("index.html"));