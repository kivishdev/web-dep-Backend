// Forms: Form submit krvaana frontend se data bhejke.
const express = require("express");  // Requring 
const app = express()


app.set("view engine", "ejs");   // Setting ejs as view engine to rendeer HTML.

// Routes:
app.get("/", (request,response) => {
    response.render("index");
})

app.listen(3000);




