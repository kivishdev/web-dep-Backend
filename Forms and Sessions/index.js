// Forms: Form submit krvaana frontend se data bhejke.
const express = require("express");  // Requring Express
const morgan =  require("morgan");
const app = express()  // Opening express tools to access that all tools

app.use(morgan("dev")) 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");   // Setting ejs as view engine to rendeer HTML.


// Routes:
// ✅ Home route for form
app.get("/", (req, res) => {
    res.render("index");   // Ye teri index.ejs file ko render karega
});

// app.get("/get-form-data", (req,res) => {
//     console.log(req.url);  // Jo bhii data rhega vo url me bhi dikh jaayegaa
//     res.send("😂Lelo Halwaa Purii")
// }) 

// Ab hum chahte haii ki dataa url me nhii dikhe isliye hum use krenge POST

// POST: Frontend se data server tk bhejne me use hoti haii.
app.post("/get-form-data", (req,res) => {   // Form ye route pe server me aayega
    console.log(req.body); 
    res.send("😂Lelo Halwaa Purii")  // Aur jaise hi form subit krengee to jaise hi ye hit hogaa to ye result Show ho Jaayegaa
})     

app.listen(3000);




