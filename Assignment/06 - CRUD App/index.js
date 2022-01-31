function handleApp(){
    let viewBtn  = document.querySelector(".eventDetail");
    let createBtn = document.querySelector(".addEventBtn");
    let editBtn = document.querySelector(".edit");
    let deleteBtn = document.querySelector(".delete");
    let viewBtnId = viewBtn.parentNode.id;
    let createBtnId = createBtn.parentNode.id;
    let editBtnId = editBtn.parentNode.id;
    let deleteBtnId = deleteBtn.parentNode.id;
    createBtn.addEventListener("click", createEvent(createBtnId));
    viewBtn.addEventListener("click", readEvent(viewBtnId));
    editBtn.addEventListener("click", updateEvent(editBtnId));
    deleteBtn.addEventListener("click", deleteEvent(deleteBtnId));
}

function createEvent(id){
    console.log("id = " + id);
    let form = document.querySelector(".formSection");
    let agenda = document.querySelector(".agendaSection");
    agenda.toggleAttribute("hidden");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", ()=>{
       var eventName = document.getElementById("name").value;
       var time = document.getElementById("time").value;
       var detail = document.getElementById("detail").value; 
    });
    events.push({
        "id" : id,
        "name" : eventName,
        "time" : time,
        "detail" : detail
    });
    loadNewEvent(id);
}

function loadNewEvent(id){
    let eventSlot = document.getElementById(id);
    let eventSlotTime = eventSlot.childNodes.hasAttribute("time");
}

function readEvent(id){
    console.log("id = " + id);
}

function updateEvent(id){

}

function deleteEvent(id){

}

handleApp();