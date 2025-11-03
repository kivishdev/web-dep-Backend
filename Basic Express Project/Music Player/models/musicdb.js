const mongoose = require('mongoose')


mongoose.connect(`mongodb://localhost:27017/musicPlayerDB`);

const musicSchema = mongoose.Schema ({
    name: String,
    lastPlayes: Date
})

module.exports = mongoose.model("Song", musicSchema);




