//This is my first commit

//Making an express file. 
let express = require('express');
let app = express();

//Serving a string
app.get("/", (req, res) => {
    res.send("Hello Express");
});