const express = require("express");
const https = require("https");  // Go to https nodejs website to read documentation
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res){
    const query = req.body.cityName;
    const apiID = "56cfd6c32042dd5b9a215d2a1009c73a";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid="+ apiID + "&units="+ unit;

    https.get(url,function(response){
        console.log(response);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p> The weather is "+ weatherDescription + "</p>");
            res.write("<img src=" + imageurl + ">");
            res.write("<h1> Tempreture of "+ query +" is "+ temp + " Degree celcius </h1>");
            
            res.send();
        })
    })
    // res.send("Server is running")
})



app.listen(3000,function(){
    console.log("Server is running at 3000");
})