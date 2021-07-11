const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
// console.log(date())
const app = express();
let items = []
let workItems = []
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/", function(req,res){
    
    let day = date.getDate();
    res.render('list', {listTitle: day, newListItems: items});
})



app.get("/work",function(req,res){
    res.render('list',{listTitle:"work Item",newListItems:workItems})
})
app.post("/",function(req,res){
    console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list == "work"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/about",function(req,res){
    res.render('about');
})
app.listen(3000,function(){
    console.log("Server is running on port 3000");
})


