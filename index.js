// require npm
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('publics'));
app.set('view engine','ejs');
app.set('views','./views');


// require routes
var homePage = require('./routes/customer/homePage/homePage');


// create link

app.use('/homePage',homePage);



app.listen(3000,function(){
    console.log('server running in port 3000!');
})