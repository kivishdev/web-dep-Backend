// To install Express: npm i express
// Express ek toolbox jaise hai jisse server create and manage kar sakte hai

const express = require("express");
const app = express(); // Ye express ko on kar deta hai

// Ab HTML ko render krnee k liye we will use "ejs". Setting the view engine to EJS
// Is line se Node.js ko bataya jata hai ki humara templating engine EJS hai 
// Matlab jab hum res.render() likhenge, Express "views" folder me .ejs file dhundhega
// ejs me render k liye .html file ki jagah .ejs file bnaate hai but usme html likh skte haii.
app.set("view engine", "ejs");

// To render a page using ejs:
// Syntax: response.render("file name without extension") 


// Ex. usage of express server and render a html page:
app.get("/", (req, res) => { 
    // If sirf text bhejna ho to send() use karo
    // res.send("This is the Home Page");

    // And agar EJS file render karni ho to render() use karo
    res.render("index");
});

// About Route:
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// Server Listen
// ----------------------------------------------------
app.listen(3000)
