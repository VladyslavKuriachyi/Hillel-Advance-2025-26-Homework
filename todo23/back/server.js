const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, '../front')));

app.use(cors());
app.use(express.json());

function loadTodos() {
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

app.put('/todos/:id', (req, res) => {
    const todos = loadTodos();
    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);
    if (!todo) return res.status(404).json({error: 'Todo not found'});

    todo.text = req.body.text ?? todo.text;
    todo.completed = req.body.completed ?? todo.completed;

    saveTodos(todos);
    res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const todos = loadTodos();
    const id = Number(req.params.id);

    const filtered = todos.filter(t => t.id !== id);

    saveTodos(filtered);
    res.json({success: true});
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});