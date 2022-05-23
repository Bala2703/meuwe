
var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser')
var PORT = 3000;
const path = require('path');
const {json} = require('express');
app.use(cors());
var conn = mysql.createConnection({
    host:"localhost",
    user:"Bala",
    password:"Bala@2703",
    database:"meuwe"
});
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
var authSql = 'select * from login where email = ? and password = ?';
conn.connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/cinemas',(request,response) =>{
    conn.query("select * from cinemas" , function(err,results){
        if(err){
            console.log(err);
            return;
        }
        response.json(results);
    });
})
app.post('/auth',bodyParser.json(),(req,res) => {
    //res.json(req.body);
    let name = req.body.name;
    let email = req.body.email;
	let password = req.body.password;
    console.log(req.body.email,req.body.password);
    conn.query(authSql,[email,password],function(err,results){
    if (err) throw err;
        try{
            if(results.length > 0){
                console.log("success");
                res.send({"redirect":"/admin"});
            }
            else{
                res.send({'error':'Invalid Email or Password'})
            }
        }
        catch{
            console.log("error catched");
        }
    }); 
})
app.listen(PORT,function(err){
    if(err)
        console.log(err);
    console.log("Server listenin/g of PORT",PORT);
});
