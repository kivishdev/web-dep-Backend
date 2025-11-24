// Express import
const express = require("express");
const app = express();

// Models import
const userModel = require("./models/user");
const postModel = require("./models/post");

// Home route
app.get("/", (req, res) => {
    // Bas text bhej diya
    res.send("Hello");
});


// --------------------------
// USER CREATE ROUTE
// --------------------------
app.get('/create', async (req, res) => {

    // Naya user create kiya aur DB me save ho gaya
    let user = await userModel.create({
        username: "Kirti",
        age: 22,
        email: "varti@580@gmail.com"
    });

    // User ka data return kar diya
    res.send(user);
});


// --------------------------
// POST CREATE ROUTE
// --------------------------
app.get('/post/create', async (req, res) => {

    // Pehle REAL user ko DB se nikaal rahe hain
    // NOTE: Yaha REAL user._id daalna hota hai
    let user = await userModel.findOne({ _id: "YOUR_REAL_USER_ID_HERE" });

    // Ab ek new post create kar rahe hain
    // Aur iske "user" field me SAME user ki ID daal rahe hain
    let post = await postModel.create({
        postdata: "Hello How Everyone",
        user: user._id   // SAME USER ID
    });

    // Ab user ke posts[] array me is new post ki ID push karte hain
    user.posts.push(post._id);

    // DB me update save
    await user.save();

    // Dono objects (user + post) back bhej diye
    res.send({ post, user });
});


// Server start
app.listen(3000, () => {
    console.log("Server 3000 par run ho raha hai");
});
