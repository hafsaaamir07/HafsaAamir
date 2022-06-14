const express = require ('express'); // require express
const app = express(); //set-up /initialize server
//define a "root" route directly pn the app ==> /


app.set("view engine","ejs") // gives us capability to execute our index



app.get ('/',function (req,res){
    res.render('index');
});

app.get ('/home',function (req,res){
    res.send ('<h1>Welcome to the home page!</h1>')
});

app.get ('/colors/:id',function (req,res){
    res.send (`<h1>My favorite color is... ${req.params.id}</h1>`)
});

app.get ('/days',function (req,res){
    res.send (weekDay = ["Monday","Tuesday","Wednesday","Thursday","Friday"])
});

app.get ('/Aboutme/:firstName/:lastName',function (req,res){
    res.send (`<h1>My first name is ${req.params.firstName} and my last name is ${req.params.lastName}</h1>`)
});

app.listen(3000, function(){
    console.log("listening on port 3000")
}) // make server run

