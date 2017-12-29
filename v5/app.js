/// (1) .displayTodos should show .todoText
/// (2) .displayTodos should tell if .todos is empty
/// (3) .displayTodos should show .completed

let todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) { // (2)
            console.log(`Your Todos list is empty`)
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true){
                    console.log(`My Todos: (x) ${this.todos[i].todoText}`); }
                    else if (this.todos[i].completed === false) {
                        console.log(`My Todos: () ${this.todos[i].todoText}`);
                    }
            }
        }
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position]
        todo.completed = !todo.completed
        this.displayTodos();
    }
}