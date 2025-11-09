$(document).ready(function () {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveAndRender() {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }

    function renderTodos() {
        $todosWrapper.empty();

        todos.forEach((todo, index) => {
            const $li = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}">
                    <div>
                        <input type="checkbox" class="me-2" ${todo.completed ? 'checked' : ''}>
                        <span class="todo-item__description" style="cursor:pointer;">${todo.text}</span>
                    </div>
                    <button class="btn btn-danger btn-sm todo-item__delete">Delete</button>
                </li>
            `);

            $li.find('input').on('change', () => {
                todos[index].completed = !todos[index].completed;
                saveAndRender();
            });

            $li.find('.todo-item__delete').on('click', () => {
                todos.splice(index, 1);
                saveAndRender();
            });

            $li.find('.todo-item__description').on('click', function () {
                $('#modal-text').text(todo.text);
                const modal = new bootstrap.Modal(document.getElementById('todoModal'));
                modal.show();
            });

            $todosWrapper.append($li);
        });
    }

    $form.on('submit', function (e) {
        e.preventDefault();
        const text = $input.val().trim();
        if (!text) return;

        todos.push({text, completed: false});
        $input.val('');
        saveAndRender();
    });

    renderTodos();
});

