const http = require("http");

// Basic Server Creation:   Ek Server jab bnaate hai to do cheeze pass krtee hai ek request and response 
// Server create hotaa hai jo ki ek function letaa hai
// Request ko answer krnee k liye we use response.end

let server = http.createServer((request, res) => { 
    console.log(request.url); //Ab yahaa hum jo bhi URL me daalenge unka route print ho jayega.
    res.end("Hello World")  
})
server.listen(3000);

// Routing: Ek hi webbsite pe dusre modules yaa pages pe jaana usko routing bolte hai Ex: /, /home, /about. And jo ye slash k baad(Ex: /home) hote hai unko hi roite bolte haiii
// Syntax to get routes name: console.log(request.url);

// Lets do one thing 2 routes pe alag alag responses print krte hai.
let server2 = http.createServer((req,response) => {
    console.log(req.url)
    if(req.url == "/about") {
        response.end("Hello! This is the About Page")
    }
    if(req.url == "/home") {
        response.end("Hello! This is the Home Page")
    }
})
server2.listen(4000);
