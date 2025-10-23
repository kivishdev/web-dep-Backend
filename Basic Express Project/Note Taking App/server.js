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

app.get('/file/:filename', (req,res) => {
    fs.readFile(`./files/${req.params.filename}`,"utf-8", (err,filedata) => {
        if(err) console.log(err);
        res.render("show", {filename: req.params.filename, filedata:filedata})
    })
})

app.get('/edit/:filename', (req,res) => {
    let filename = req.params.filename;

    fs.readFile(`./files/${filename}`, 'utf-8',(err, filedata) => {
        if(err) console.log(err);
        else res.render("edit", {filename:filename, filedata: filedata} )
    })
})

// Pseudocode for POST /edit
app.post('/edit', (req, res) => {
    // 1. Get old name, new name, AND new content from the form
    let oldFilename = req.body.previous;
    let newFilename = req.body.new;
    let newContent = req.body.details; // We will add a textarea named "details"

    // 2. First, rename the file
    fs.rename(`./files/${oldFilename}`, `./files/${newFilename}`, (err) => {
        if (err) {
            console.log(err);
            return; // Stop if rename fails
        }
        
        // 3. IF rename is successful, THEN write the new content to the NEW file
        fs.writeFile(`./files/${newFilename}`, newContent, (writeErr) => {
            if (writeErr) {
                console.log(writeErr);
                return; // Stop if write fails
            }

            // 4. If everything is successful, redirect to home
            res.redirect("/");
        });
    });
});

app.listen(3000)