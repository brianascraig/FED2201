function displayWelcome(){
    let welcomeForm = document.querySelector(".welcomeForm");
    welcomeForm.addEventListener("submit", handleSubmit) 
}

function handleSubmit(event){
    event.preventDefault();
    alert("Welcome!");
    return;
}

displayWelcome();