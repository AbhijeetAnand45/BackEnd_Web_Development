const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https=require("https");

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const emailId = req.body.emailid;
    console.log(firstName,lastName,emailId)

    const data = {        // go to mailchimp documentation "Request body parameter" to get overview
        members:[{
            email_address: emailId,
            status: "subscribed",
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
            }
          }
        ]
      };
      var jsonData = JSON.stringify(data);
      const url = "https://us7.api.mailchimp.com/3.0/lists/7f181f37b0";
      const options = {
        method: "POST",
        headers:{
          Authorization: "auth 0915728a440865dd8945ecbc8e2cee37-us7"
        }
        // auth: "aabhijeet011:0915728a440865dd8945ecbc8e2cee37-us7"

      }
      const request = https.request(url,options,function(response){
        if(response.statusCode === 200){
          res.sendFile(__dirname + "/success.html");
        }
        else{
          res.sendFile(__dirname + "/failure.html");
        }
        response.on("data",function(data){
          console.log(JSON.parse(data));
        })
      })
      request.write(jsonData);
      request.end();
})

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})

//Api key
// 0915728a440865dd8945ecbc8e2cee37-us7

//list id
// 7f181f37b0