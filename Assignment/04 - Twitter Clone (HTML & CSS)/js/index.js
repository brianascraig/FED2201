
$(document).ready(()=>{
    let homePageSection = $(".homePageSection")
    let signUpBtn = $(".signUpBtn");
    let signInBtn = $(".signInBtn");    
    homePageSection.toggleAttribute("hidden");
    signUpBtn.click(displaySignUpForm);
    signInBtn.click(displaySignInForm);
});


