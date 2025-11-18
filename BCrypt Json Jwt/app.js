// Sbsee pehle khuchh cheeze sikhni haiii alag alag
// Cookies kaise set krtee hai 
// BCrypt kaise use krtee hai and encryption and decryption kaise hota hai.
// JWT kyaa hai and jwt me data kaise store karee and bahar nikaale.


// Cookie: Server se browser pe koi data store krvaa denaa.
const express = require("express");
const app = express();
// To read cookies in our console we need to use this: 
const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.get("/", (req,res) => {
    // Cookie Set krnaa 
    res.cookie("Name", "Harshita");
    res.send("done");
})

// Ab yahaa pe koi aur route bhi banaa diyaa jaaye to cookie saath me jaaayegi alag se configure nhii krnaa hogaa.
// Ex: 
app.get('/read', (req,res) => {
    // Read cookies
    console.log(req.cookies);
    
    // Delete Cookies:
    res.clearCookie("Name");
    res.send("Cookie deleted");
});


app.listen(3000);