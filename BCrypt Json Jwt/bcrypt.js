const express = require("express");
const bcrypt = require("bcrypt")
const app = express();

// Bcrypt bs 2 kaam krtaa haii 
// Hashing: Password ko unreadable format me store krte hai.
// Compare: Password Compare me kaam aata hai 

// Bcrypt:
// bcrypt password ko “encrypt” nahi karta — balki hash karta hai.
// Hash ka matlab hota hai one-way conversion.
// Ek baar hash ban gaya → original password kabhi wapas nahi mil sakta.

// Salt = password me add kiya gaya random data
// Taaki koi bhi 2 same passwords ka hash same na aaye.

// saltRounds = kitni baar hashing repeat hogi
// Recommended = 10

// Syntax: (New Version): Hashing:
// bcrypt.hash(password, SaltRounds, function(err, hash) {
// console.log(hash);
// console.log(err);
// })

app.get("/", async (req,res) => {
 try{
    let password = "enter-password"
    const hash = await bcrypt.hash(password, 10);
    console.log("Entered Password:", password);
    console.log("Hashed Password", hash);
    res.send("Hashed Password")
    // Salt isi hash ki 1st 29 characters rhengee.
 }
 catch(err) {
    console.log(err);
 }
})

app.get('/read', async (req,res) => {
try {
    let enteredPassword = "enter-Password";
    let storedHash = "enter-Hash"
    // Compare krnaa Bcrypt se:
    let ismatch = await bcrypt.compare(enteredPassword, storedHash);
    console.log(ismatch);
    res.send("Read Page")

} catch(err) {
 console.log(err);
}
});


app.listen(3000);