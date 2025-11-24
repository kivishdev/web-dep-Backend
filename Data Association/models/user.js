// Mongoose import kiya
const mongoose = require("mongoose");

// Mongoose Schema banana start
const userSchema = new mongoose.Schema({

    // Username string me store hoga
    username: String,

    // Email string me store hoga
    email: String,

    // Age number me store hogi
    age: Number,

    // Ye array of posts ka relation banaya hai (One user → Many posts)
    posts: [
        {
            // Har post ki ID yaha ayegi
            type: mongoose.Schema.Types.ObjectId,

            // Ye bata raha ke ye ID "post" model se aayegi
            ref: "post"
        }
    ]
});

// Schema se model banaya
module.exports = mongoose.model('user', userSchema);
