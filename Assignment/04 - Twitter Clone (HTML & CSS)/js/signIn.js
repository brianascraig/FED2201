function displaySignInForm(){
    console.log("inside displaySignInForm");
    let signInForm = $(".signInForm");
    let homePageSection = $(".homePageSection");
    let signInFormSection = $(".signInFormSection");
    homePageSection.toggleAttribute("hidden");
    signInFormSection.toggleAttribute("hidden");
    signInForm.submit(handleSignInSubmit);
}

function handleSignInSubmit(event) {
    event.preventDefault();
    console.log("inside handleSignInSubmit")
    let email = $("#emailCurrentUser").val();
    let password = $("#passwordCurrentUser").val();
    console.log("email signinsubmit: " + email);
    console.log("password signinsubmit" + password);
    let validateSignIn = getUserByCredentials(email, password);
    if (validateSignIn[0].length === 1){
      let userId = validateSignIn[1];
      let userKey = validateSignIn[2];
      loadUserDashboard(userId, userKey);
    } else {
      let signInForm = $(".signInForm");
      signInForm.prepend(`<p class="wrongLogin">Username and/or password incorrect. Please try again.</p>`)
    }
  }

  function getUserByCredentials(email, password){
    let users = [];
    let userId = null;
    let userKey = null;
    let loginTokenNum = [];
    console.log("inside getUserByCredentials")
    $.get(`${baseUrl}/users${jsonExt}`, function(data, status){
      console.log("success getUserByCredentials")
      }).then((data)=>{ 
        for (var key in data) {
          users.push(key);
      }
        console.log(data);
        console.log("users arr: " + users); 
        for (let i = 0; i < users.length; i++){
          console.log("inside for getuserby id");
          $.get(`${baseUrl}/users/${users[i]}${jsonExt}`
          , function(data, status){
          console.log("success");
          }).then((data)=>{
            console.log("then key: " + users[i]);
            if (email == data.email && password == data.password){
              userKey = users[i];
              userId = data.id;
              let loginToken = Math.floor(Math.random() * 100) + 1;
              loginTokenNum.push(loginToken);
              // loadUserDashboard(userKey, userId);
            }
      })
    }
    }) 
      return [loginTokenNum, userId, userKey];          
  } 