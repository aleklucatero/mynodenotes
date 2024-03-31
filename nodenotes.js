//This is my first commit

//Making an express file. 
let express = require('express');
let app = express();
require('dotenv').config(); //Allows you to load .env variables into process.env

//Serving a string
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

//Serving a file. Useful when we want to show pictures etc.
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//Using middleware express.static(path). Intercepting HTTP req and adding info
//Intercepting index.html and adding css
app.use("/public", express.static(__dirname + "/public"));

//Serving a json file on get, using a .env variable
//In this example, I want to configure getting json files in all caps
app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else {
        res.json({"message": "Hello json"});
    };
});