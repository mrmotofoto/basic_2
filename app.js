var express     = require('express'),
    path        = require("path"),
    nodemailer  = require("nodemailer"),
    bodyParser  = require('body-parser');

    
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
   res.send("This is the home pages"); 
});

app.listen(process.env.PORT, process.env.IP,  function(){
   console.log("Server Is Running"); 
});





