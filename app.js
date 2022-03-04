const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/day.js');

const app = express();
const newTodos = []

app.use(bodyParser.urlencoded({extended   : true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    const day = date.getDate();
    res.render('list', {day: day, newTodo: newTodos});
})

app.post('/', function(req, res){
    newTodo = req.body.newTodo;
    newTodos.push(newTodo);
    res.redirect('/');
})

app.listen(3000, function(){
    console.log('Server running on port 3000');
})
