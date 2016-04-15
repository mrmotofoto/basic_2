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

app.get('/contact', function(req, res) {
   res.render("contact"); 
});

app.post('/contact/send', function(req, res) {
   var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: "XXXX",
           password: "XXXX"
       }
   });
   var mailOptions = {
       from: 'XXX',
       to: 'XXX',
       subject: 'Web Submit',
       text: 'You have a submit with details...Name: ' +req.body.name+ ' Email: ' +req.body.email+ ' Message: ' +req.body.message,
       html: '<p>You have a submit with details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
       
   };
   transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
          console.log(error);
          res.redirect('/');
      } else {
          console.log('Message Sent: ' + info.response);
      }
   });
});


app.listen(process.env.PORT, process.env.IP,  function(){
   console.log("Server Is Running"); 
});





