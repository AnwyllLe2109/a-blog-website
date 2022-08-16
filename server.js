//set up path
const path = require("path");
// set up express
const express = require("express");
const app = express();
//set up port
let PORT = process.env.PORT || 8080;


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/layouts/main.html"));
})

app.listen(PORT, ()=>{
    console.log("Express http server listening on " + PORT);
})