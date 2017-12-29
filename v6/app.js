/// .toggleAll: If everything is true, make everything false
/// .toggleAll : If everything is flase, make everything true.


let todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
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
    },
    toggleAll: function (){
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        for (let i = 0;i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }

       if (completedTodos === totalTodos){
           for (let i = 0; i < totalTodos; i++){
               this.todos[i].completed = false;
           }

       }
       else {
           for (let i = 0; i < totalTodos; i++){
               this.todos[i].completed = true;
           }
       }
       this.displayTodos();
},
}