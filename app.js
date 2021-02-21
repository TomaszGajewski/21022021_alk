const express = require("express");
const path = require("path");
const functions = require("./functions");
const port = 3000;
const app = express();

const sample = () =>'jakiś podtytuł'
const x = 11;

app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use("/js",  express.static(path.join(__dirname,"./js")))

app.get("/", function (req,res){
    res.render("index",{
        pageTitle: "21.02.2021",
        subTitle: functions.someText,
        subSubTitle: x == 10 ? sample() : null,
    });
})

app.get("/about", function (req,res){
    res.send("strona o mnie");
})

app.listen(port,(err) =>{
    if(err) {return console.log(`błąd: ${err}`)}
    console.log(`strona działa na porcie ${port}`)
});