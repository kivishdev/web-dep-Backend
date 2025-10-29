// In this will se CRUD with MongoDB with ejs and server side: 

const express = require("express");
const app = express();
const path = require('path');

// Requring the Database Model.
const userModel = require('./models/user');
const user = require("./models/user");


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render("index");
});

app.get('/read', async (req,res) => {
    let users = await userModel.find()
    res.render('read', {users});
});

app.get('/delete/:id', async (req,res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
});

app.get('/edit/:id', async (req,res) => {
    let user = await userModel.findOne({_id: req.params.id});
    res.render("edit", {user});
    console.log("Yaa dataa is in edit route");
})

app.post('/update/:id', async (req,res) => {
    let {name,email,image} = req.body;

    let user = await userModel.findOneAndUpdate(
        {_id: req.params.id},
        {name,email,image}, // Update kyaa krnaa hai.
        {new: true}
    )
    res.redirect('/read');
})

app.post('/create', async (req,res) => {
    let {name, email, image} = req.body;

    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
});

app.listen(3000);