const mongoose = require("mongoose")

// Syntax to connect to mongodb: mongoose.connect(`mongodb://localhost:27017/database-name`)

mongoose.connect(`mongodb://localhost:27017/mongopractice`)

const userSchema = new mongoose.Schema({   // Ab sochke dehkho iske andar kya hota hai vo apni schema hai sb.
    name: String,
    username: String,    // Ye saari properties haii jinka name hum dete haii and uske saath me uski type dete haii yahii sab properties schema hoti haii.
    email: String,
    // password: String,
    // age: Number,
    // gender:{
    //     type:String,
    //     enum: ["male, female"]
    // }
})

// exporiting and making a Making a model:  module.exports = mongoose.model("model-name", schema-name) jo hi naam hogaa uska plural name model name hogaa.
// 
module.exports = mongoose.model("user", userSchema);




