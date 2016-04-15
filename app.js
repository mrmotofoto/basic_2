var express     = require('express'),
    path        = require("path"),
    nodemailer  = require("nodemailer"),
    bodyParser  = require('body-parser');

    
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res) {
   res.render("index", {title: 'Welcome'}); 
});

app.get('/about', function(req, res) {
   res.render("about"); 
});

app.listen(process.env.PORT, process.env.IP,  function(){
   console.log("Server Is Running"); 
});





