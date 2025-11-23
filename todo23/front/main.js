const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = [];
const API_URL = 'http://localhost:3000/todos';

async function fetchTodos() {
    const res = await fetch(API_URL);
    return res.json();
}

async function createTodo(text) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text})
    });
    return res.json();
}

async function updateTodo(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return res.json();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}

function renderTodos() {
    todosWrapper.innerHTML = '';

    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.completed) li.classList.add('todo-item--checked');

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `;

        li.querySelector('input').addEventListener('change', async () => {
            await updateTodo(todo.id, {completed: !todo.completed});
            loadAndRender();
        });

        li.querySelector('.todo-item__delete').addEventListener('click', async () => {
            await deleteTodo(todo.id);
            loadAndRender();
        });

        todosWrapper.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    await createTodo(text);
    input.value = '';
    loadAndRender();
});

async function loadAndRender() {
    todos = await fetchTodos();
    renderTodos();
}

loadAndRender();

