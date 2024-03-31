//This is my first commit

//Making an express file. 
let express = require('express');
let app = express();

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