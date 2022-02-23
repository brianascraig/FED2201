function handleApp(){
    console.log("inside handleApp");
    let todoForm = $(".todoForm");
    todoForm.submit(handleSubmit);
    let allTodosFilter = $(".allTodosFilter");
    allTodosFilter.click(updateTodoTable(allTodos));
    let activeTodosFilter = $(".activeTodosFilter");
    activeTodosFilter.click(updateTodoTable(incompleteTodos));
    let completedTodosFilter = $(".completedTodosFilter");
    completedTodosFilter.click(updateTodoTable(completedTodos));
}

function handleSubmit(event){
    event.preventDefault();
    let todoItem = $("#todoItem").val();
    let id = Math.floor(Math.random() * 100) + 1;
    incompleteTodos.push(id, todoItem);
    console.log("handleSubmit incompletetodos" + incompleteTodos)
    createTodo(id, todoItem)
}

function createTodo(id, todoItem){
    incompleteTodos.push({
        "id" : id,
        "content" : todoItem,
        "complete" : false
    });
    updateTodoTable(allTodos);
}

function handleStatusUpdate(id, completionStatus){
    if (completionStatus == false){
        for (let i = 0; i < incompleteTodos.length; i++){
            if (incompleteTodos[i].id == id){
                incompleteTodos[i].complete = true;
                completedTodos.push(incompleteTodos[i]);
                incompleteTodos.splice(i, 1);
            }
        }
    } else if (completionStatus == true){
        for (let i = 0; i < completedTodos.length; i++){
            if (completedTodos[i].id == id){
                completedTodos[i].complete = true;
                incompleteTodos.push(completedTodos[i]);
                completedTodos.splice(i, 1);
            }
        }
    }
    updateTodoTable(allTodos);
}


function updateTodoTable(filter){
    let todoTB = document.querySelector(".todoTB");
    let sumIncompleteTodos = incompleteTodos.length;
    while (todoTB.firstChild){
        todoTB.removeChild(todoTB.firstChild);
    }
    for (let i = 0; i < filter.length; i++){
        todoTB.innerHTML += `
        <tr id=${filter[i].id} class="updateTodoTable">
            <td onclick="handleStatusUpdate(${filter[i].id}, ${filter[i].complete})">
                <span class="completion-status-${filter[i].complete}"></span></td>
            <td class="content">${filter[i].content}</td>
        </tr>
        <tfoot>
            <tr>
                <td>${sumIncompleteTodos} item(s) left</td>
                <td>
                    <span class="allTodosFilter">All</span>
                    <span class="aciveTodosFilter">Active</span>
                    <span class="completedTodosFilter">Completed</span>
                </td>
                <td><span class="clearCompleted">Clear Completed</span>
            </tr>
        </tfoot>
        `
     ;
    }
}

handleApp();