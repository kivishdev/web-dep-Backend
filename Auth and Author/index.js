const express = require("express")
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");


app.use("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req,res) => {

})

app.listen(3000);