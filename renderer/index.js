
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    addToDo();
});

input.addEventListener("keydown", function (e) {
    var arrow = { left: 37, up: 38, right: 39, down: 40 };
    switch (e.which) {
        case arrow.down:
            changeInputBoxFocus();
          break;
    }
})




//#region UI Related Functions
function createTodoEl(todo) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
        todoEl.classList.add('completed');
    }
    todoEl.innerHTML = todo.text;
    todoEl.tabIndex = -1;

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        updateLS();
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLS();
    })

    todoEl.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.which == 32) {
            todoEl.classList.toggle("completed");
        }
        if (e.which == 46) {
            // delete the todo 
            todoEl.remove();
            updateLS();
        }


        updateLS();
    })

    return todoEl;
}


function changeInputBoxFocus() {
    const todosEl = document.querySelectorAll('li');

    if (todosEl.length > 0) {
        todosEl[0].focus();
        todosEl[0].classList.add("focus");
        input.blur();
    }
}


function handleKeyUpDownTodoEvent() {
    $('ul.todos').on('focus', 'li', function() {
        $this = $(this);
        $this.addClass('focus').siblings().removeClass("focus");
        $this.closest('ul.todos').scrollTop($this.index() * $this.outerHeight());
    }).on('keydown', 'li', function(e) {
        $this = $(this);
        if (e.keyCode == 40) {        
            $this.next().focus();
            return false;
        } else if (e.keyCode == 38) {        
            $this.prev().focus();
            return false;
        }
    }).find('li').first().focus();
}


handleKeyUpDownTodoEvent();

//#endregion


//#region Data related functions

function fetchTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    
    if (todos) {
        todos.forEach(todo => {
            addToDo(todo)
        });
    }
}

fetchTodos();



function addToDo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = createTodoEl(todo);

        todosUL.appendChild(todoEl);
        input.value = "";
        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({

            text: todoEl.innerHTML,
            completed: todoEl.classList.contains('completed')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todos))
}

//#endregion