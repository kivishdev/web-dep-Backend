const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Syntax: jwt.sign( PAYLOAD, SECRET_KEY, OPTIONS )
    // const token = jwt.sign(
    //     { email: user.email, id: user._id }, // 1. Payload (Data)
    //     "mera_secret_key_bhai_kisi_ko_mt_btana", // 2. Secret Key
    //     { expiresIn: "1h" } // 3. Options (Expiry)
    // );


//     const var = jwt.verify(token, "SECRET_KEY");

// console.log(var);


app.get("/", (req, res) => {
    let token = jwt.sign({email: "data-need-to-sent"}, "PRIVATE-KEY" )
    res.cookie("token", token)
    console.log(token);
    res.send("Done");
})

app.get('/read', (req,res) => {
    // To Read jwt data:
    let jwtdata = jwt.verify(req.cookies.token, "key")
    console.log(jwtdata);
    
    res.send("Yaa Data Received")
})

app.get('/del', (req,res) => {
    res.clearCookie("token");
    res.send("Cookie Deleted");
})

app.listen(3000);