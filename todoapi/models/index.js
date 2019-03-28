var mongoose = require('mongoose');
mongoose.set('debug', true);

const db = require('../config/keys').mongoURI;
mongoose.connect(db);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");