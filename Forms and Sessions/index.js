// Forms: Form submit krvaana frontend se data bhejke.
const express = require("express");  // Requring Express
const morgan =  require("morgan");
const app = express()  // Opening express tools to access that all tools

app.use(morgan("dev")) 

app.use(express.json()) // Jab requestt aata haii to vo data jumbled hotaa hai saare data ek saath hota haiii and vahii data ye json me dikhaate haii.
app.use(express.urlencoded({extended: true}))
// Ab if hume koii static file add krnii haii to:
// Syntax: app.use(express.static("folder-ka-naam"))
app.use(express.static("public"))

app.set("view engine", "ejs");   // Setting ejs as view engine to rendeer HTML.



// Routes:
// ✅ Home route for form
app.get("/", (req, res) => {
    // Passing a data to the frontend: 
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

// Dynaic Routing: Hum aise bohot routes bnaate hai jisme sirf ek hissa change hotaa haii. For Ex: /profile/harsh, /profile/harshita... and aur bhi aise same:
// Ab isi ko mujhe dynamic bnaana haii to phir vo dynamic part ko realise kro and uske hi route k aage : lagaa do.
app.get("/profile/:username"  // Ab vo colon k aage mai khuchh bhi naam lik du s chalega.
    , (req,res) => {
        // req.params vahaa use hotaa jiske route me : lgaa ho. And ab hum url me jo bhi naam daal de vo hume main page me dikh jaayega.
    res.send(`Welcome, ${req.params}`)
})

app.listen(3000);




