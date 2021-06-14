
/* Go to expressjs.com and read how to install express in getting started
 */
const express = require("express");
const app = express(); 
 
// Now I have to use the app some where so we will use its function listen
/* This will throw an error as we doesn't have any thing to /GET request
app.listen(3000,function(){
    console.log("Server started on port 3000");
}) */

app.get("/",function(request,response){
    // console.log(request);  command :  node server.js
    // response.send("Hello");
    response.send("<h1> Hey</h1>")  // localhost:3000 in browser
})
app.get("/about",function(req,res){
    res.send("Hey I am Abhijeet");
})
app.get("/contact",function(req,res){
    res.send("contact at anandamu011@gmail.com");
})

app.listen(3000,function(){
    console.log("Server is started on port 3000");
})