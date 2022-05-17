var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require('cors');
var PORT = 3000;
const {json} = require('express');
app.use(cors());
var conn = mysql.createConnection({
    host:"localhost",
    user:"Bala",
    password:"Bala@2703",
    database:"meuwe"
});
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
app.listen(PORT,function(err){
    if(err) console.log(err);
    console.log("Server Listening on PORT",PORT);
});
