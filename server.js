const express  = require('express');
const connection = require('./config.js');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const select = require('./controller/select');
const add = require('./controller/add'); 
const login = require('./controller/login');
const edit = require('./controller/edit');
const update = require('./controller/update');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('./public/uploads'));

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

app.get('/' , (req,res)=>{
    res.render("signin");
});
app.get('/login', (req,res)=>{
    res.render('login');
});
app.get('/logout' , (req,res)=>{
    res.render("login");
})
app.get('/controller/select' , select.select);

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,(file.name=file.originalname))
    }
});

const upload = multer({storage:storage});
app.get('/edit/:id' , edit.edit);
app.get('/delete/:id' , (req,res)=>{
    connection.query("DELETE FROM login WHERE id='"+req.params.id+"'" , (err,rows)=>{
        res.render('login');
    });
});
app.post('/controller/add' ,upload.single("file"), add.add);
app.post('/controller/login' , login.login);
app.post('/controller/update',upload.single("file") , update.update);
app.listen(8000 , function(req,res){
    console.log("server lestening at port 8000");
});
