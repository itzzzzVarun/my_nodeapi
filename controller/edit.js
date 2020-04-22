const connection = require('./../config');
module.exports.edit = (req,res)=>{
    connection.query("SELECT * FROM login" ,(err,rows)=>{
        if(rows.length){
            res.render("update",{data:rows});
        }
    });
}