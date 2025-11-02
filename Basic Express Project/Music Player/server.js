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
            res.render('music', {file: fileList});
        }
    })
});

app.get('/spotify', (req,res) => {
    const query = req.query.Song; 
    const SpotifySearchLink = `https://open.spotify.com/search/${encodeURIComponent(query)}`;

    res.redirect(SpotifySearchLink);
})

app.listen(3000);
