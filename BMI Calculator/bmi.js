const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var bmi = w / (h*h);
    res.send("Your BMI is " + bmi);
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
})