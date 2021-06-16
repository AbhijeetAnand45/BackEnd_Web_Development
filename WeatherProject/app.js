const express = require("express");
const https = require("https");  // Go to https nodejs website to read documentation

const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Araria&appid=&units=metric";

    https.get(url,function(response){
        console.log(response);
    })
    res.send("Server is running")
})


app.listen(3000,function(){
    console.log("Server is running at 3000");
})
