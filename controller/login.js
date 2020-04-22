const connection = require('./../config');
module.exports.login = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM login WHERE username='"+username+"'" , function(err,rows){
        if(rows.length){    
            if(password==rows[0].password){
                console.log(rows);
            res.render('logined' , {data:rows});
            }
            else{
                console.log(password);
                res.end("Your password is incorrect!");
            }
        }
        else if(username=='admin' && password=='admin'){
            connection.query("SELECT * FROM login" , (err,rows)=>{
                res.render('show' ,{data:rows});
            });
        }
        else{
            res.end("Your usesname or password is incorrect!!!");
        }
    });
}