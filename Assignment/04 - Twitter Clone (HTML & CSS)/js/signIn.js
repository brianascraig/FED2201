function displaySignInForm(){
    console.log("inside displaySignInForm")
    // let signInForm = documet.getElementById("signInForm");
    let form = document.querySelector(".formSection");
    form.toggleAttribute("hidden");
    form.addEventListener("submit", handleSubmit)
    
}