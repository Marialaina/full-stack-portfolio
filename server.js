// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// JSON FILES
const projects = require("./projects.json");
const about = require("./about.json");

// CREATING EXPRESS
const app = express();

// MIDDLEWARE
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello Marialaina! :)")
});
// retrieving files
app.get("/projects", (req, res) => {
    res.json(projects);
});
app.get("/about", (req, res)=> {
    res.json(about);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));