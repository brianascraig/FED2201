function handleApp(){
    console.log("inside handleApp");
    let todoForm = $(".todoForm");
    todoForm.submit(handleSubmit);
    let allTodosFilter = $(".allTodosFilter");
    allTodosFilter.click(updateTodoTable);
    let activeTodosFilter = $(".activeTodosFilter");
    activeTodosFilter.click(updateTodoTable);
    let completedTodosFilter = $(".completedTodosFilter");
    completedTodosFilter.click(filterCompletedTodos);
    let clearCompleted = $(".clearCompleted");
    clearCompleted.click(clearAllTodos);
    let themeSelect = $(".themeSelect");
    themeSelect.click(handleThemeChange)
}

function handleThemeChange(){
    let allBgLight = document.querySelectorAll()
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
    console.log("createTodo incompleteTodo" + incompleteTodos)
    updateTodoTable();
}

function handleStatusUpdate(id, completionStatus){
    console.log("handleStatusUpdate completion" + completionStatus)
    if (completionStatus == false){
        for (let i = 0; i < incompleteTodos.length; i++){
            if (incompleteTodos[i].id == id){
                incompleteTodos[i].complete = true;
                completedTodos.push(incompleteTodos[i]);
                incompleteTodos.splice(i, 1);
            }
            updateTodoTable();
        }
    } else if (completionStatus == true){
        for (let i = 0; i < completedTodos.length; i++){
            if (completedTodos[i].id == id){
                completedTodos[i].complete = true;
                incompleteTodos.push(completedTodos[i]);
                completedTodos.splice(i, 1);
            }
        }
        updateTodoTable();
    }  
}


function updateTodoTable(){
    let allTodos = incompleteTodos.concat(completedTodos);
    console.log("updateTodoTable filter" + allTodos);
    let todoTB = document.querySelector(".todoTB");
    let sumIncompleteTodos = incompleteTodos.length;
    while (todoTB.firstChild){
        todoTB.removeChild(todoTB.firstChild);
    }
    for (let i = 0; i < allTodos.length; i++){
        todoTB.innerHTML += `
        <tr id=${allTodos[i].id} class="updateTodoTable">
            <td onclick="handleStatusUpdate(${allTodos[i].id}, ${allTodos[i].complete})">
                <span class="completion-status-${allTodos[i].complete}"></span></td>
            <td class="content">${allTodos[i].content}</td>
        </tr> `
     ;
    }
    let itemsLeft = $(".itemsLeft");
    itemsLeft.empty();
    itemsLeft.append(`${sumIncompleteTodos} item(s) left`);
}

function filterCompletedTodos(){
    console.log("updateTodoTable filter" + completedTodos);
    let todoTB = document.querySelector(".todoTB");
    let sumIncompleteTodos = incompleteTodos.length;
    while (todoTB.firstChild){
        todoTB.removeChild(todoTB.firstChild);
    }
    for (let i = 0; i < completedTodos.length; i++){
        todoTB.innerHTML += `
        <tr id=${completedTodos[i].id} class="updateTodoTable">
            <td onclick="handleStatusUpdate(${completedTodos[i].id}, ${completedTodos[i].complete})">
                <span class="completion-status-${completedTodos[i].complete}"></span></td>
            <td class="content">${completedTodos[i].content}</td>
        </tr> `
     ;
    }
    let itemsLeft = $(".itemsLeft");
    itemsLeft.empty();
    itemsLeft.append(`${sumIncompleteTodos} item(s) left`);
}

function filterIncompleteTodos(){
    console.log("updateTodoTable filter" + incompleteTodos);
    let todoTB = document.querySelector(".todoTB");
    let sumIncompleteTodos = incompleteTodos.length;
    while (todoTB.firstChild){
        todoTB.removeChild(todoTB.firstChild);
    }
    for (let i = 0; i < incompleteTodos.length; i++){
        todoTB.innerHTML += `
        <tr id=${incompleteTodos[i].id} class="updateTodoTable">
            <td>
                <span class="completion-status-${incompleteTodos[i].complete}" 
                    onclick="handleStatusUpdate(${incompleteTodos[i].id}, ${incompleteTodos[i].complete})"></span></td>
            <td class="content">${incompleteTodos[i].content}</td>
        </tr> `
     ;
    }
    let itemsLeft = $(".itemsLeft");
    itemsLeft.empty();
    itemsLeft.append(`${sumIncompleteTodos} item(s) left`);
}

function clearAllTodos(){
    completedTodos.splice(0, completedTodos.length)
    let allTodos = incompleteTodos.concat(completedTodos);
    console.log("updateTodoTable filter" + allTodos);
    let todoTB = document.querySelector(".todoTB");
    let sumIncompleteTodos = incompleteTodos.length;
    while (todoTB.firstChild){
        todoTB.removeChild(todoTB.firstChild);
    }
    for (let i = 0; i < allTodos.length; i++){
        todoTB.innerHTML += `
        <tr id=${allTodos[i].id} class="updateTodoTable">
            <td onclick="handleStatusUpdate(${allTodos[i].id}, ${allTodos[i].complete})">
                <span class="completion-status-${allTodos[i].complete}"></span></td>
            <td class="content">${allTodos[i].content}</td>
        </tr> `
     ;
    }
    let itemsLeft = $(".itemsLeft");
    itemsLeft.empty();
    itemsLeft.append(`${sumIncompleteTodos} item(s) left`);
}

handleApp();