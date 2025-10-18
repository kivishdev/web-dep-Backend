// To install Express: npm i express
// Express ek toolbox jaise hai jisse server create and manage kar sakte hai
const express = require("express");
const morgan = require("morgan");  // Requiring Morgan
// Opening Express Toolkit
const app = express(); // Ye express ko on kar deta hai

app.use(morgan("dev"))  // Morgan se key detaiils maang rhaa.

// View Engine: 
// Ab HTML ko render krnee k liye we will use "ejs". Setting the view engine to EJS
// Is line se Node.js ko bataya jata hai ki humara templating engine EJS hai 
// Matlab jab hum res.render() likhenge, Express "views" folder me .ejs file dhundhega
// ejs me render k liye .html file ki jagah .ejs file bnaate hai but usme html likh skte haii.
app.set("view engine", "ejs");

// To render a page using ejs:
// Syntax: response.render("file name without extension") 


// Middleware: Ye ek server pe request and response k beech ka connecting link haii jo request se response tk data bhejta haii.
// Koi bhi request ko ek route se jaane se isse hokar guzarnaa padtaa haii.
// Ex. Use:
app.use((req,res,next) => {
    console.log("This is the middleware")
    const a = 12
    const b = 13
    console.log(a+b)
    return next()    // Iska mtlb ye haii aage badho.
})

// Learning third party middleware: Jo hum koii baahar ka code use krtee hai 
// For Heree we used  morgan.

// Hum chahte hai to hum ek middleware apne 1 individual route k liyee bnaa sktee haiii 
app.get("/",(req,res,next) => {
    console.log("This is the individual middleware for the Home Page that is at route /");
   let a = 23;
   let b = 3;
   console.log(a+b)
   next();
}, (request,response) => {
    response.send('This is the home page at route "/" ')
});


//  Express Routes Example:
// Ex. usage of express server and render a html page:
app.get("/index", (req, res) => { 
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
