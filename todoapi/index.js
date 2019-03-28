var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser'),
    path = require('path');

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));


// app.get('/', function(req, res){
//     res.sendFile("index.html");
// });

app.use('/api/todos', todoRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('todosfrontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'todosfrontend', 'build', 'index.html'));
    });
}

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});