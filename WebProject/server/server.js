const express = require("express");
const app = express();
const path=require('path')

var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'second-hand-market_db'
});

app.listen(8080,function(){
  console.log('listening in 8080')
})

const db = require('./server');

app.get('/Login', (req, res) => {
    db.query("SELECT * FROM second-hand-market_db", (err, data) => {
        if(!err) res.send({ id: data });
        else db.query("INSERT * FROM id data", (err, data));
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.use(express.json());
var cors=require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,'react/build')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'react/build/index.html'));
})

app.get('/product',function(req,res){
  res.json({name: 'black shoes'});
})

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'react/build/index.html'));
})
