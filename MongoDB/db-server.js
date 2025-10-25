// For Understanding see db.txt

const express = require("express");
const app = express();

const userModel = require("./usermodels");   // Ab ye ek constant variable k andar apna puraa model aa chuka haii.


app.get('/', (req,res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({ // Ab jo DB me schema properties diyaa tha uska values dena hai.
        name: "Kirtiya",
        username: "vishy380",
        email: "viry380@gmail.com",
    })
    res.send(createduser);
})


app.get('/update', async (req, res) => {
    // findOneAndUpdate ka syntax: ({filter}, {update}, {options})
    let updateduser = await userModel.findOneAndUpdate(
        { username: "kirtiy380" },   // kisko dhundhna hai
        { name: "Kirti Y"},     // kya update karna hai
        { new: true }                // updated document return karega
    );
    res.send(updateduser, "Yaa User is Updated");
});

app.get('/read', async (req,res) => {
    // let users = await userModel.find(); // Read k liye bhii find use hota hai.
    // res.send(users) // Ye saare data read kr legaa.
    // If ek read krnaa hai to uske field ki ek value find me daal dena
    let users = await userModel.find({name: 'Kirtiya'});
    res.send(users);
})

app.listen(3000);