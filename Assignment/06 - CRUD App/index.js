function handleApp(){
    let viewBtn  = document.querySelector(".eventDetail");
    let createBtn = document.querySelector(".addEventBtn");
    let editBtn = document.querySelector(".edit");
    let deleteBtn = document.querySelector(".delete");
    let viewBtnId = viewBtn.parentNode.id;
    let createBtnId = createBtn.parentNode.id;
    createBtn.addEventListener("click", createEvent(createBtnId));
    viewBtn.addEventListener("click", readEvent(viewBtnId));
    editBtn.addEventListener("click", updateEvent);
    deleteBtn.addEventListener("click", deleteEvent);
}

function getEventId(){

}

function createEvent(id){
    
}

function readEvent(id){

}

function updateEvent(){

}

function deleteEvent(){

}

handleApp();