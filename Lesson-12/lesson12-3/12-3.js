const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const list = document.getElementById('task-list');

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }

});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
})


addBtn.addEventListener('click', (event) => {
    const taskText = input.value.trim();
    if (taskText === '') {
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
    list.appendChild(li);

    input.value = '';

});