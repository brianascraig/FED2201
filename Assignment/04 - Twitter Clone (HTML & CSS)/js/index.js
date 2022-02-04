function handleApp(){
    let signUpForm = document.getElementById("signUpForm");
    let signInForm = documet.getElementById("signInForm");
    let signUpBtn = document.querySelector(".signUpBtn");
    let signInBtn = document.querySelector(".signInBtn");
    signInForm.addEventListener("submit", handleSignInSubmit);
    signUpForm.addEventListener("submit", handleSignUpSubmit);
    // signUpBtn.addEventListener("click", displaySignUpForm);
    // signInBtn.addEventListener("click", displaySignInForm);
    
}

function handleSignInSubmit(event){
    event.preventDefault();
}

function handleSignUpSubmit(event){
    event.preventDefault();
}