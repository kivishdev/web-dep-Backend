const express = require("express")
const http = require("http")
const fs = require("fs")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs")

app.get('/', (req,res) => {
    console.log("Hello from Secret Message App");
    res.render("index")
});

app.get('/getmessage', (req,res) => {
    const code = req.query.code;

    const filePath = `/messages/${code}.txt`;

    if(filePath) {
        res.redirect(`/getmessage/${code}`)
    } else {
        res.send("Wrong Code Entered")
    }
})



app.post('/save', (req,res) => {
    const message = req.body.message;
    // Agar message empty rhaa 
    if(!message) {
        console.log("Please write Message");
        return
    }
    // Random Secret code Bnaana:
    let code = Math.random().toString(36).slice(2, 8);

    // Path Bnaana
    const filePath = `messages/${code}.txt`;

    // File me Message Likhnaa:
    fs.writeFile(filePath, message, (err) => {
        if(err) {
            res.send("Error saving your message");
        } else {
            res.send(`Your code is: ${code}`);
        }
    })
})


app.get('/getmessage/:code', (req,res) => {
    let code = req.params.code;

    const filePath = `messages/${code}.txt`;

    fs.readFile(filePath, (err,filedata) => {
        if(err) {
            res.send("Message Not Found")
        } else {
            res.render("message", {viewmessage: filedata});
        }
    })
}), 

app.listen(3000);






