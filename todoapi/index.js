var express = require('express'), 
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

//body-parser allows us to access the request body that comes in as part of a PUT or POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//www.url.com/
app.get('/', function(req, res) {
    res.sendFile("index.html");
});

//www.url.com/api/todos/
//use routes coming from todoRoutes, which is in the routes directory
//append prefix
app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("App is running on port " + port);
});