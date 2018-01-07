let todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position]
        todo.completed = !todo.completed
    },
    toggleAll: function () {
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }

        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    },
};

let handlers = {
    addTodo: function (){
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function (){
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPositionInput = '';
        view.displayTodos();
    },
    deleteTodo: function (){
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo (deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function () {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function (){
        todoList.toggleAll();
        view.displayTodos();
    }
};

let view = {
displayTodos: function (){
  let todosUl = document.querySelector(`ul`);
  todosUl.innerHTML = '';
  for (let i = 0; i < todoList.todos.length; i++){
    let todoLi = document.createElement (`li`);
    let todo = todoList.todos[i];
    let todoTextWithCompletion = '';
    if (todo.completed === true){
      todoTextWithCompletion = `(x) ${todo.todoText}`;
    }
    else { todoTextWithCompletion = `( ) ${todo.todoText}`;};
    todoLi.textContent = todoTextWithCompletion;
    todosUl.appendChild(todoLi);
  }
}
};
