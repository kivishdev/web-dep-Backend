const express = require("express");
const fs = require("fs");
const app = express();
const musicModel = require('./models/musicdb')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));


app.get('/', (req,res) => {
    fs.readdir('./uploads', (err, fileList) => {
        if(err) {
            console.log(err, "This is the errorerr");
        } else {
            res.render('music', {file: fileList, User:null});
            return
        } 
    })
});

app.get('/:username', async (req,res) => {
    const usernamedata = req.params.username

    // Checking if any Name data is there in DB.
    let user = await musicModel.findOne({ name: usernamedata });

    // If user does not exist then Create:
    if(!user) {
        user = await musicModel.create({
            name: usernamedata
        });
        console.log("New User Created", user.name);
    } else {
        console.log("Registered User", user.name);
    }

    res.render('music', {file: [], User: user.name});
    return
})


app.get('/spotify', (req,res) => {
    const query = req.query.Song; 
    const SpotifySearchLink = `https://open.spotify.com/search/${encodeURIComponent(query)}`;

    res.redirect(SpotifySearchLink);
})

app.listen(3000);
