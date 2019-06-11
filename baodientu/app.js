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

app.use(require('./middlewares/danhmuc.mdw'));

app.use('/categories', require('./routes/categories'));
app.use('/tblbaiviet', require('./routes/tblbaiviet'));


app.get('/error', (req, res) => {
    res.render('error', { layout: false });
  })
  
  app.use((req, res, next) => {
    next(createError(404));
  })
  
  app.use((err, req, res, next) => {
  
    var status = err.status || 500;
    var vwErr = 'error';
  
    if (status === 404) {
      vwErr = '404';
    }
  
    // app.set('env', 'prod');
    // var isProd = app.get('env') === 'prod';
  
    process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
    var isProd = process.env.NODE_ENV === 'prod';
    var message = isProd ? 'An error has occured. Please contact administartor for more support.' : err.message;
    var error = isProd ? {} : err;
  
    var message = isProd ? 'An error has occured. Please contact administartor for more support.' : err.message;
    var error = isProd ? {} : err;
  
    res.status(status).render(vwErr, {
      layout: false,
      message,
      error
    });
  })
var port = 3000;
app.listen(port,()=>{
    console.log(`sever is running at port ${port}`);
});
