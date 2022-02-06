function handleApp(){
    let createBtn = document.querySelector(".addAddressBtn");
    createBtn.addEventListener("click", displayForm);
}

function displayForm(){
    console.log("inside displayForm")
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", handleSubmit)
    
}

function handleSubmit(event){
    event.preventDefault();
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
    console.log("inside handlesubmit");
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
    console.log("firstname" +firstName);
    createContact(id, firstName, middleName, lastName, email, address,
                dob, city, state, zip)
}

function createContact(id, firstName, middleName, lastName, email, address,
    dob, city, state, zip){
        console.log("inside create")
        console.log("id createfunc " +id);
        console.log("firstname createfunc" +firstName);
        console.log("lastname createfunc" +lastName);
        console.log("middlename createfunc" +middleName);
        console.log("dob createfunc" +dob);
        console.log("state createfunc" +state);
        console.log("zip" +zip);
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
    let newContact = contacts.find(contact => contact.id === id);
    let contactIndex = contacts.indexOf(newContact);
    console.log("contacts arr: " + contacts[1].firstName);
    // console.log("contacts[id] = " + contacts[contactIndex]);
    updateContactTable();
}

function readContact(id){
    console.log("inside read")
    console.log("id = " + id);
    let quickViewSection = document.querySelector(".quickViewSection");
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
}

// function updateContact(id, firstName, middleName, lastName, email, address,
    // dob, city, state, zip){
    // console.log("inside updateContact func id= " + id)
    // let contactToUpdate = contacts.find(contact => contact.id === id);
    // contactToUpdate.firstName = firstName;
    // contactToUpdate.middleName = middleName;
    // contactToUpdate.lastName = lastName;
    // contactToUpdate.email = email;
    // contactToUpdate.address = address;
    // contactToUpdate.dob = dob;
    // contactToUpdate.city = city;
    // contactToUpdate.state = state;
    // contactToUpdate.zip = zip;
    // console.log(" update contactIndex " + contactToUpdate.firstName);
    // contacts[contactIndex] = {
    //     "id" : id,
    //     "firstName" : firstName,
    //     "middleName" : middleName,
    //     "lastName" : lastName,
    //     "email" : email,
    //     "address" : address,
    //     "dob" : dob,
    //     "city" : city,
    //     "state" : state,
    //     "zip" : zip
    // }
    // updateContactTable();

// }

function displayUpdateForm(id){
    let updateForm = document.querySelector(".formUpdateSection");
    updateForm.toggleAttribute("hidden");
    let contactToUpdate = contacts.find(contact => contact.id === id);
    updateForm.innerHTML +=
        `<form action="#" method="post">
            <label for="contactId">Contact Id</label>
            <input type="text" name="contactId" id="contactId" value="${id}" disabled>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" placeholder="${contactToUpdate.firstName}">
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
        </form>`
    updateForm.addEventListener("submit", handleUpdate);
}

function handleUpdate(event){
    event.preventDefault();
    let contactId = document.getElementById("contactId").value;
    let firstName = document.getElementById("firstName").value;
    console.log("handleUpdate firstName" + firstName);
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value; 
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value; 
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value; 
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