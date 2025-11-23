const express = require("express")
const app = express();
const path = require('path');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req,res) => {
    res.render("index")
})

app.post('/create', (req,res) => {
    let {username, email, password,age} = req.body;

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        console.log("The passwrd hash is:",hash);

        let createdUser = await userModel.create ({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            age: req.body.age,
    })
    let token = jwt.sign(email, "Secret");
    res.cookie("token", token)
    res.send(createdUser);
    })
});

app.get('/login', (req,res) => {
    res.render("login");
})

app.post('/login', async (req,res) => {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) {
        return res.send("Something Went Wrong")
    }
        let intpassword = req.body.password;
        bcrypt.compare(intpassword, user.password, (error, result) => {
            console.log("Login Route result: User exists:", result);
            if(result == true) return res.send("Swaagat hai User")
                else res.send("Something wennt Wrong");
        })
})

app.get('/logout', (req,res) => {
    res.clearCookie("token");
    res.redirect("/");
})

app.listen(3000);