function displayWelcome(){
    let welcomeForm = document.querySelector(".welcomeForm");
    welcomeForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    alert("Welcome!");
    displayName();
    return;
}

function displayName(){
    let userName = document.getElementById("name").value;
    let visitorName = document.querySelector(".visitorName");
    visitorName.append(userName);
}

displayWelcome();