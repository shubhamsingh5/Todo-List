var express = require('express');

//router allows us to break our routes out into modular chunks
//require the routes in main index.js
var router = express.Router();

var db = require('../models');
var helpers = require('../helpers/todos')

//list all todos
//router.get('/', );

//create new todo
//router.post('/', );

//combine get and post
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);


// //retreive a todo
// //colon defines something as a path variable
// router.get('/:todoId', helpers.getTodo);

// //update a todo
// router.put('/:todoId', helpers.updateTodo);

// //delete a todo
// router.delete('/:todoId', helpers.deleteTodo);

//combine update, retrieve and edelete
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .put(helpers.archiveTodo)
    .delete(helpers.deleteTodo);

module.exports = router;