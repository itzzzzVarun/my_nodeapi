const connection = require('./../config');
const express =  require('express');
module.exports.select  = function(req,res){
    var sql ="SELECT * FROM login";
connection.query(sql,(err,rows)=>{
    console.log(rows);
        res.render('show' , {data:rows});
});
}
                                          