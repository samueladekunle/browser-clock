// Import the express module.
const express = require("express");
// Import the path module.
const path = require("path");

// Create an express app object.
const app = express();

// Path to the assets directory.
const assets = path.join(__dirname, "assets");
// Path to the view(index.html).
const view = path.join(__dirname, "public");

// Invoke the express.static() middleware.
app.use(express.static(assets));
app.use(express.static(view));

// Initialise the port number
const port = process.env.PORT || 9000;
app.set("port", port);
// Listen to request at port number.
app.listen(app.get("port"), () => console.log(`Server running at port ${port}`));

// Render index.html, as the home page.
app.get("/", (req, res) => res.sendFile("index.html"));