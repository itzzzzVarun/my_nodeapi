const connection = require('./../config');
module.exports.update = (req,res)=>{
    var file1= req.file.filename ;
   connection.query("SELECT * FROM login" , (err,rows)=>{
       if(rows.length){
           connection.query("UPDATE login SET first_name='"+req.body.first_name+"' , last_name='"+req.body.last_name+"' , father_name='"+req.body.father_name+"' , branch='"+req.body.branch+"' , username='"+req.body.username+"' , password='"+req.body.password+"' , image='"+file1+"'" , (err,result)=>{
               res.render("login");
           })
       }
       else{
           res.end("This username is not available");
       }
   }); 
}