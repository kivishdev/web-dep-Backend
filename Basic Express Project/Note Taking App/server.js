const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// Setting view engine as ejs:
app.set("view engine", "ejs")

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Express ko bol rhee public folder dhunee
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    fs.readdir("./files",(err, files) => {
        res.render("index", {files:files});
    } )
})

app.post('/create', (req,res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        console.log(err, "Created File")
        res.redirect("/")
    });
})

app.listen(3000)