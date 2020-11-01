import express = require('express');
import mongoose = require('mongoose');
const app: express.Application = express();
const db = mongoose.connect('mongodb://localhost/todolist');
const Todo = require('./todo');

const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/todo/create', (req, res) => {
  const todo = new Todo();
  todo.title = req.body.title;
  todo.completed = false;
  todo.save((err : any, savedTodo: any) => {
    if (err) {
      res.status(500).send({error:"Could not save todo"});
    } else {
      res.send(savedTodo);
    }
  })
})

app.get('/todo/read', (req, res) => {
  Todo.find({}, (err:any, todos:any) => {
    if (err) {
      res.status(500).send({error:"Could not fetch todo"});
    } else {
      res.send(todos);
    }
  })
})

app.put('/todo/update', (req,res) => {
  Todo.findByIdAndUpdate(req.param('todoId'), req.body, {new:true}, (err:any, updatedTodo:any) => {
    if (err) {
      res.status(500).send({error:"Could not update todo"});
    } else {
      res.send(updatedTodo);
    }
  })
})

app.delete('/todo/delete', (req,res) => {
  Todo.findByIdAndRemove(req.param('todoId'), (err:any, deletedTodo:any) => {
    if (err) {
      res.status(500).send({error:"Could not delete todo"});
    } else {
      res.send(deletedTodo);
    }
  })
})

app.listen(4000, () => {
  console.log('API listening on port 4000')
})