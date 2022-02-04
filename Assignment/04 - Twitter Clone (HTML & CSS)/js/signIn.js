function displaySignInForm(){
    console.log("inside displaySignInForm")
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", handleSubmit)
    
}