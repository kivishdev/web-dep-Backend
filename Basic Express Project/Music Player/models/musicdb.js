const mongoose = require('mongoose')


mongoose.connect(`mongodb://localhost:27017/musicPlayerDB`);

const musicSchema = mongoose.Schema ({
    name: String,
    lastPlayes: Date
})
 
mongoose.model("Song", musicSchema);




