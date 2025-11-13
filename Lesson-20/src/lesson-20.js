import { renderTodos } from './import.js';

$(document).ready(function () {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveAndRender() {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos(todos, saveAndRender, $todosWrapper);
    }



    $form.on('submit', function (e) {
        e.preventDefault();
        const text = $input.val().trim();
        if (!text) return;

        todos.push({text, completed: false});
        $input.val('');
        saveAndRender();
    });

    saveAndRender();
});

