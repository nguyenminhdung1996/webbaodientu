var express = require('express');
var exphbs =require('express-handlebars');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app =express();
app.use(morgan('dev'));
app.engine('handlebars',exphbs({
    layoutsDir: 'views/layouts',
    defaultLayout:'main.handlebars'
}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/categories', require('./routes/categories'));


app.get('/',(req,res)=>{
    //res.end("home");
    res.render('home');
})
app.get('/text',(req,res)=>{
    res.end('đã quá nhiều ngày mai!!!');
})
app.get('/error',(req,res)=>{
    res.render('error',{
        layout: false
    });
})
var port = 3000;
app.listen(port,()=>{
    console.log(`sever is running at port ${port}`);
});
