/// Objects 

///  (1) It should store the todos array on an object
///  (2) It should have a displayTodo method
/// (3) It should have and addTodo method
/// (4) It should have a changeTodo method
/// (5) It should have a deleteTodo method

let todoList = {
    todos: [`item1`,`item2`,`item3`], // (1)
    displayTodos: function () {
        console.log(`My todos ${this.todos}`); // (2)
    },
    addTodo: function (todo){                   // (3)
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position,newValue){   // (4)
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position){            // (5)
        this.todos.splice(position,1);
        this.displayTodos();
    }
}

