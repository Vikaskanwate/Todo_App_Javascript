const todoFrom = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];


todoFrom.addEventListener('submit',function(e){
    e.preventDefault();
    
})

function addTodo(){
    const todoText = todoInput.value.trim();

    if(todoText.length > 0){
        const todoObject = {
            text : todoText,
            completed : false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();

        todoInput.value = "";
    }
}