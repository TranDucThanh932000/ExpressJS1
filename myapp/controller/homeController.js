const { urlencoded } = require("express")

var bodyParser = require('body-parser')
//method post hide infor
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// create application/json parser
var jsonParser = bodyParser.json()


module.exports=function(app){
    app.get("/",function(req,res){
        res.send("index")
    });

    app.post("/login",urlencodedParser,function(req,res){
        res.send("Welcome, "+req.body.username)
        console.log(req.body.username);
        console.log(req.body.password);
    });

    app.post("/loginjson",jsonParser,function(req,res){
        res.send("OK")
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}