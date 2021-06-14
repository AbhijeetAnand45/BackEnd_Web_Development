const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html"); //(__dirname)It helps to remove error when you deployed your application on some other sites like github

})

app.post("/",function(req,res){    // npm install body-parser to get some calculated result
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The sum is " + result);
    // console.log(req.body);
    // res.send("Thanks for posting that"); 
})
app.listen(3000,function(){
    console.log("Server started at port 3000");
})