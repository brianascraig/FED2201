function handleApp(){
    let signUpBtn = document.querySelector(".signUpBtn");
    let signInBtn = document.querySelector(".signInBtn");
    signUpBtn.addEventListener("click", displaySignUpForm);
    signInBtn.addEventListener("click", displaySignInForm);
}