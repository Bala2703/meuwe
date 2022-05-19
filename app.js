var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require('cors');
const bodyParser = require('body-parser')
var PORT = 3000;
const {json} = require('express');
app.use(cors());
var conn = mysql.createConnection({
    host:"localhost",
    user:"Bala",
    password:"Bala@2703",
    database:"meuwe"
});
var sql = 'select * from login where email = ? and password = ?';
conn.connect();
app.get('/cinemas',(req,res) => {
    conn.query("select * from cinemas",function(err,results){
        if(err){
            console.log(err);
            return;
        }
        res.json(results);   
        //console.log(JSON.stringify(results));
    });
})
app.post('/login', bodyParser.json(), (req, res) => {
    res.json(req.body)
    console.log(req.body.email,req.body.password);
    conn.query(sql,[req.body.email,req.body.password] ,function(err,result){
            if(err) throw err;try{
        console.log(result[0].name);
            if(result[0].email == req.body.email && result[0].password == req.body.password){
                console.log("success");
            }
        else{
            console.log("failed");
        }
           }catch{
                console.log("error catched");
            }
    });
    
})
app.listen(PORT,function(err){
    if(err) console.log(err);
    console.log("Server Listening on PORT",PORT);
});
