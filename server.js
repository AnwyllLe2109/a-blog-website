//set up path
const path = require("path");
// set up express
const express = require("express");
const app = express();
//set up port
let PORT = process.env.PORT || 8080;
//set up handlebars
const exphbs = require("express-handlebars")
app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

//use this line to connect the app to bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
//use this line to be able to connect css file with the hbs file
app.use(express.static('public')); 

app.get("/", (req,res)=>{
    // res.sendFile(path.join(__dirname, "/views/layouts/main.html"));
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log("Express http server listening on " + PORT);
})