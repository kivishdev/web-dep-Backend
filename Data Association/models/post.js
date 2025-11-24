// Mongoose import kiya
const mongoose = require("mongoose");

// Post schema banaya
const postSchema = new mongoose.Schema({

    // Post ke andar jo text/content hota hai
    postdata: String,

    // Ye post kis user ne banaya — uska relation
    user: {
        // Yaha user ki MongoDB ID aayegi
        type: mongoose.Schema.Types.ObjectId,

        // Ye ID "user" model ko refer karti hai
        ref: "user"
    },

    // Date auto-fill ho jayegi jab post banega
    date: {
        type: Date,
        default: Date.now
    }
});

// Is schema ko export kiya
module.exports = mongoose.model('post', postSchema);
