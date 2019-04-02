var mongoose = require('mongoose');
mongoose.set('debug', true);

const mongodb = require('../config/keys').mongoURI;
//connect something to a database that doesn't exist
//database will be created automatically
mongoose
    .connect(mongodb, { useNewUrlParser: true})
    .then(() => console.log('MongoDB connected....'))
    .catch(err => console.log(err));

module.exports.Todo = require('./todo');
