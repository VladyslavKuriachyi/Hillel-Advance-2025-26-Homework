const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

function readTodos() {
    return JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
}

function saveTodos(todos) {
    fs.writeFileSync('./todos.json', JSON.stringify(todos, null, 2));
}

app.post('/todos', (req, res) => {
    const todos = loadTodos();
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.json(newTodo);
});