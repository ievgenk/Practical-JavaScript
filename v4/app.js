/// (1) AddToDo method should be adding objects instead of text
/// (2) ChangeTodo method should change the todoText property
/// (3) Create new method todoList.toggleCompleted should change the completed property

let todoList = {
    todos: [], 
    displayTodos: function () {
        console.log(`My todos ${this.todos}`); 
    },
    addTodo: function (todoText){       // (1)            
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position,todoText){   
        this.todos[position].todoText = todoText;    //(2)
        this.displayTodos();
    },
    deleteTodo: function (position){            
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function (position){
        let todo = this.todos[position] 
        todo.completed = !todo.completed 
        this.displayTodos();   //(3)
    }
}