const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/ageCalc`);

let userSchema = new mongoose.Schema({
    Username: String,
    Name: String,
});

module.exports = mongoose.model("users", userSchema);