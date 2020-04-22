const connection = require('./../config');
module.exports.add = function(req,res){
    var firstname = req.body.first_name;
    var lastname = req.body.last_name;
    var fathername = req.body.father_name;
    var branch = req.body.branch ;
    var username = req.body.username;
    var password = req.body.password;
    var file1 = req.file.filename;
            connection.query("INSERT INTO login(first_name,last_name,father_name,branch,username,password,image)VALUES('"+firstname+"','"+lastname+"','"+fathername+"','"+branch+"','"+username+"','"+password+"','"+file1+"')" , function(err){
                if(!err){
                   
                    res.render("login");
                }else{
                    console.log(err);
                    res.end("This username is not available");
                }
            });
        }
