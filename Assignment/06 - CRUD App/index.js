function handleApp(){
    let createBtn = document.querySelector(".addContactBtn");
    createBtn.addEventListener("click", displayForm);
    let contactsTBContainer = document.querySelector(".contactsTBContainer");
    contactsTBContainer.toggleAttribute("hidden");
    }

function displayForm(){
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", handleSubmit)
    
}

function handleSubmit(event){
    event.preventDefault();
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
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
    createContact(id, firstName, middleName, lastName, email, address,
                dob, city, state, zip)
}

function createContact(id, firstName, middleName, lastName, email, address,
    dob, city, state, zip){
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
    updateContactTable();
}

function readContact(id){
    let quickViewSection = document.querySelector(".quickViewSection");
    let quickViewContainer = document.querySelector(".quickViewContainer");  
    let contactsTBContainer = document.querySelector(".contactsTBContainer");
    contactsTBContainer.toggleAttribute("hidden");
    quickViewContainer.toggleAttribute("hidden");
    let closeBtn = document.querySelector(".closeBtn");
    let readContact = contacts.find(contact => contact.id === id);
    let contactIndex = contacts.indexOf(readContact);
    quickViewSection.innerHTML += `
    <tr id=${contacts[contactIndex].id}>
        <td class="firstName">${contacts[contactIndex].firstName}</td>
        <td class="middleName">${contacts[contactIndex].middleName}</td>
        <td class="lastName">${contacts[contactIndex].lastName}</td>
        <td class="email">${contacts[contactIndex].email}</td>
        <td class="address">${contacts[contactIndex].address}</td>
        <td class="dob">${contacts[contactIndex].dob}</td>
        <td class="city">${contacts[contactIndex].city}</td>
        <td class="state">${contacts[contactIndex].state}</td>
        <td class="zip">${contacts[contactIndex].zip}</td>   
    </tr>`
    closeBtn.addEventListener("click", closeQuickView)
}

function closeQuickView(){
    let quickViewContainer = document.querySelector(".quickViewContainer");
    quickViewContainer.toggleAttribute("hidden");
    let quickViewSection = document.querySelector(".quickViewSection");
    while (quickViewSection.firstChild){
        quickViewSection.removeChild(quickViewSection.firstChild);
    }
    let contactsTBContainer = document.querySelector(".contactsTBContainer");
    contactsTBContainer.toggleAttribute("hidden");

}

function displayUpdateForm(id){
    let updateForm = document.querySelector(".formUpdateSection");
    updateForm.toggleAttribute("hidden");
    let contactToUpdate = contacts.find(contact => contact.id === id);
    updateForm.innerHTML +=
        `<form action="#" method="post">
            <div class="inputContainer">
                <label for="contactIdUpdate">Contact Id</label>
                <input type="text" name="contactId" id="contactIdUpdate" value="${id}" disabled>
            </div>
            <div class="inputContainer">
                <label for="firstNameUpdate">First Name</label>
                <input type="text" name="firstName" id="firstNameUpdate" value="${contactToUpdate.firstName}">
            </div>
            <div class="inputContainer">
                <label for="middleNameUpdate">Middle Name </label>
                <input type="text" name="middleName" id="middleNameUpdate" value="${contactToUpdate.middleName}">
            </div>
            <div class="inputContainer">
                <label for="lastNameUpdate">Last Name</label>
                <input type="text" name="lastName" id="lastNameUpdate" value="${contactToUpdate.lastName}">
            </div>
            <div class="inputContainer">
                <label for="emailUpdate">Email</label>
                <input type="email" name="email" id="emailUpdate" value="${contactToUpdate.email}">
            </div>
            <div class="inputContainer">
                <label for="addressUpdate">Address</label>
                <input type="text" name="address" id="addressUpdate" value="${contactToUpdate.address}">
            </div>
            <div class="inputContainer">
                <label for="dobUpdate">DOB</label>
                <input type="date" name="dob" id="dobUpdate" value="${contactToUpdate.dob}">
            </div>
            <div class="inputContainer">
                <label for="cityUpdate">City</label>
                <input type="text" name="city" id="cityUpdate" value="${contactToUpdate.city}">
            </div>
            <div class="inputContainer">
                <label for="stateUpdate">State</label>
                <input type="text" name="state" id="stateUpdate" value="${contactToUpdate.state}">
            </div>
            <div class="inputContainer">
                <label for="zipUpdate">Zip</label>
                <input type="text" name="zip" id="zipUpdate" value="${contactToUpdate.zip}">
            </div>
            <input type="submit">
        </form>`
    updateForm.addEventListener("submit", handleUpdate);
    
}

function handleUpdate(event){
    event.preventDefault();
    let contactId = document.getElementById("contactIdUpdate").value;
    let firstName = document.getElementById("firstNameUpdate").value;
    console.log("handleUpdate firstName" + firstName);
    let middleName = document.getElementById("middleNameUpdate").value;
    let lastName = document.getElementById("lastNameUpdate").value; 
    let email = document.getElementById("emailUpdate").value;
    let address = document.getElementById("addressUpdate").value;
    let dob = document.getElementById("dobUpdate").value; 
    let city = document.getElementById("cityUpdate").value;
    let state = document.getElementById("stateUpdate").value;
    let zip = document.getElementById("zipUpdate").value; 
    console.log("handleUpdate: " + contactId + " " + firstName);
    let contactUpdate = contacts.find(contact => contact.id == contactId);
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].id == contactId){
            contacts[i].firstName = firstName;
            contacts[i].middleName = middleName;
            contacts[i].lastName = lastName;
            contacts[i].email = email;
            contacts[i].address = address;
            contacts[i].dob = dob;
            contacts[i].city = city;
            contacts[i].state = state;
            contacts[i].zip = zip;

            console.log("contacts[i].firstName = " + contacts[i].firstName);
        }
    }
    // contactUpdate.firstName = firstName;
    // contactUpdate.middleName = middleName;
    // contactUpdate.lastName = lastName;
    // contactUpdate.email = email;
    // contactUpdate.address = address;
    // contactUpdate.dob = dob;
    // contactUpdate.city = city;
    // contactUpdate.state = state;
    // contactUpdate.zip = zip;
    console.log(contacts);
    // updateContact(contactId, firstName, middleName, lastName, email, address,
    //             dob, city, state, zip)
    updateContactTable();
    let updateForm = document.querySelector(".formUpdateSection");
    updateForm.toggleAttribute("hidden");
}

function deleteContact(id){
    let contactToDelete = document.getElementById(id);
    contactToDelete.remove();
    let deleteContact = contacts.find(contact => contact.id === id);
    let contactIndex = contacts.indexOf(deleteContact);
    contacts.splice(contactIndex, 1);
    updateContactTable();
}

function updateContactTable(){
    console.log("inside updateContactTb");
    let contactsTB = document.querySelector(".contactsTB");
    while (contactsTB.firstChild){
        contactsTB.removeChild(contactsTB.firstChild);
    }
    for (let i = 0; i < contacts.length; i++){
        console.log("inside for loop");
        console.log("contacts length " + contacts.length)
        contactsTB.innerHTML += `
        <tr id=${contacts[i].id}>
            <td class="firstName">${contacts[i].firstName}</td>
            <td class="middleName" hidden>${contacts[i].middleName}</td>
            <td class="lastName">${contacts[i].lastName}</td>
            <td class="email" hidden>${contacts[i].email}</td>
            <td class="address" hidden>${contacts[i].address}</td>
            <td class="dob" hidden>${contacts[i].dob}</td>
            <td class="city" hidden>${contacts[i].city}</td>
            <td class="state" hidden>${contacts[i].state}</td>
            <td class="zip" hidden>${contacts[i].zip}</td>
            <td class="view" onclick="readContact(${contacts[i].id})">View More</td>
            <td class="edit" onclick="displayUpdateForm(${contacts[i].id})">Edit</td>
            <td class="delete" onclick="deleteContact(${contacts[i].id})">Delete</td>     
        </tr>`
     ;
    }
}

handleApp();