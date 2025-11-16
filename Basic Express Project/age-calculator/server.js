const express = require("express");
const app = express();

// Importing DateBase model:
const ageModel = require('./models/namemodel');
const namemodel = require("./models/namemodel");
const { create } = require("../../MongoDB/usermodels");

// Setting View Engine
app.set("view engine", "ejs");

// Setting Basic Express Middleware.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static files:
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render('age-auth')
})

app.post('/user', async (req,res) => {
    let inUsername = req.body.Username
    let inName = req.body.Name

    let CreateUser = await namemodel.create({
        Username: inUsername,
        Name: inName,
    });

    let logDate = new Date();
    // Outputs a standard date and time string based on local settings
    console.log(`User Added on: ${logDate.toLocaleDateString()} at ${logDate.toLocaleTimeString()}`);

    res.render('age', {Name: CreateUser.Name, id: CreateUser._id,})
});

app.get('/delete/:id', async (req,res) => {
    let id = req.params.id;
    let CreateUser = await namemodel.findByIdAndDelete(id);
    res.redirect('/')
})

app.listen(3000);





