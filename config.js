const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login'
});

connection.connect((err)=>{
    if(!err){
        console.log("Connected successfully...");
    }else{
        console.log("Error here...");
    }
});

module.exports = connection ; 