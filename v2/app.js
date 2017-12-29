let todos = [`item 1`,`item 2`,`item 3`]

/// Function to display Todos

function displayTodos (){
    console.log(`My todos: ${todos}`);
}

///Function to add new Todos

function addNewTodos (list,newTodo){
    list.push(newTodo); 
    displayTodos();
}

/// Function to change Todos


function changeTodos (list,position,newValue){
list[position] = newValue;
displayTodos();
}

/// Function for deleting Todos

function deletingTodos (list,position) {
    list.splice(position,1);
    displayTodos();
}



