function handleApp(){
    // let contacts = document.querySelector(".contactSection");
    // contacts.toggleAttribute("hidden");
    let contactsTB = document.querySelector(".contactsTB");
    let createBtn = document.querySelector(".addAddressBtn");
    let editBtn = document.querySelector(".edit");
    let deleteBtn = document.querySelector(".delete");
    let editBtnId = editBtn.parentNode.id;
    let deleteBtnId = deleteBtn.parentNode.id;
    createBtn.addEventListener("click", displayForm);
    editBtn.addEventListener("click", displayUpdateForm(editBtnId));
    deleteBtn.addEventListener("click", deleteEvent(deleteBtnId));
}

function displayForm(){
    console.log("inside display")
    let contacts = document.querySelector(".contactSection");
    let form = document.querySelector(".formSection");
    contacts.toggleAttribute("hidden");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(){
    console.log("inside handlesubmit")
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value; 
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value; 
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value; 
    let id = Math.floor(Math.random() * 100) + 1;
    createEvent(id, firstName, middleName, lastName, email, address,
                dob, city, state, zip)
}

function createEvent(id, firstName, middleName, lastName, email, address,
    dob, city, state, zip){
        console.log("inside create")
    console.log("id = " + id);
    contacts.push({
        "id" : id,
        "firstName" : firstName,
        "middleName" : middleName,
        "lastName" : lastName,
        "email" : email,
        "address" : address,
        "dob" : dob,
        "city" : city,
        "state" : state,
        "zip" : zip
    });
    console.log("contacts[id] = " + contacts[id]);
    loadNewEvent(id);
}

function loadNewEvent(id){
    console.log(" loadNewEvent id = " + id);
    let contactsTB = document.querySelector(".contactsTB");
    let newContact = contacts.find(contact => contact.id === id);
    contactsTB.innerHTML(`
    <tr id=${id}>
        <td class="firstName">${newContact.firstName}</td>
        <td class="middleName" hidden>${newContact.middleName}</td>
        <td class="lastName">${newContact.lastName}</td>
        <td class="email" hidden>${newContact.email}</td>
        <td class="address" hidden>${newContact.address}</td>
        <td class="dob" hidden>${newContact.dob}</td>
        <td class="city" hidden>${newContact.city}</td>
        <td class="state" hidden>${newContact.state}</td>
        <td class="zip" hidden>${newContact.zip}</td>
        <td class="view" onclick="readContact(${id})">View More</td>
        <td class="edit">Edit</td>
        <td class="delete">Delete</td>     
    </tr>`
    );
}

function readContact(id){
    console.log("inside read")
    console.log("id = " + id);
    let contactToRead = document.getElementById(id);
    let middleName = contactToRead.classList.contains("middleName");
    let email = contactToRead.classList.contains("email");
    let address = contactToRead.classList.contains("address");
    let dob = contactToRead.classList.contains("dob");
    let city = contactToRead.classList.contains("city");
    let state = contactToRead.classList.contains("state");
    let zip = contactToRead.classList.contains("zip");
    middleName.toggleAttribute("hidden");
    email.toggleAttribute("hidden");
    address.toggleAttribute("hidden");
    dob.toggleAttribute("hidden");
    city.toggleAttribute("hidden");
    state.toggleAttribute("hidden");
    zip.toggleAttribute("hidden");
}

function updateEvent(id, firstName, middleName, lastName, email, address,
    dob, city, state, zip){
    let updateContact = contacts.find(contact => contact.id === id);
    let contactIndex = contacts.indexOf(updateContact);
    contacts[contactIndex] = {
        "id" : id,
        "firstName" : firstName,
        "middleName" : middleName,
        "lastName" : lastName,
        "email" : email,
        "address" : address,
        "dob" : dob,
        "city" : city,
        "state" : state,
        "zip" : zip
    }
}

function displayUpdateForm(id){
    let contacts = document.querySelector(".contactSection");
    let updateForm = document.querySelector(".formUpdateSection");
    contacts.toggleAttribute("hidden");
    updateForm.toggleAttribute("hidden");
    let contactToUpdate = contacts.find(contact => contact.id === id);
    updateForm.innerHTML(
        `<form action="#" method="post">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value="${contactToUpdate.firstName}">
            <label for="middleName">Middle Name </label>
            <input type="text" name="middleName" id="middleName" value="${contactToUpdate.middleName}">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value="${contactToUpdate.lastName}">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="${contactToUpdate.email}">
            <label for="address">Address</label>
            <input type="text" name="address" id="address" value="${contactToUpdate.address}">
            <label for="DOB">DOB</label>
            <input type="date" name="DOB" id="DOB" value="${contactToUpdate.dob}">
            <label for="city">City</label>
            <input type="text" name="city" id="city" value="${contactToUpdate.city}">
            <label for="state">State</label>
            <input type="text" name="state" id="state" value="${contactToUpdate.state}">
            <label for="zip">Zip</label>
            <input type="text" name="zip" id="zip" value="${contactToUpdate.zip}">
            <input type="submit">
        </form>`)
    updateForm.addEventListener("submit", handleUpdate(id))
}

function handleUpdate(id){
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value; 
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value; 
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value; 
    updateEvent(id, firstName, middleName, lastName, email, address,
                dob, city, state, zip)
}

function deleteEvent(id){
    let contactToDelete = document.getElementById(id);
    contactToDelete.remove();
}

handleApp();