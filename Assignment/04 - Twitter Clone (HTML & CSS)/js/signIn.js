function displaySignInForm(){
    console.log("inside displaySignInForm");
    let signInForm = $(".signInForm");
    // let signInFormSection = $(".signInFormSection");
    // signInFormSection.toggleAttribute("hidden");
    signInForm.submit(handleSignInSubmit);
}

function handleSignInSubmit(event) {
    event.preventDefault();
    console.log("inside handleSignInSubmit")
    let email = $("#emailCurrentUser").val();
    let password = $("#passwordCurrentUser").val();
    console.log("email signinsubmit: " + email);
    console.log("password signinsubmit" + password);
    getUserByCredentials(email, password);
  }

  function getUserByCredentials(email, password){
    let users = [];
    console.log("inside getUserByCredentials")
    $.get(`${baseUrl}/users${jsonExt}`, function(data, status){
      console.log("success getUserByCredentials")
      }).then((data)=>{ 
        for (var key in data) {
          users.push(key);
      }
        console.log(data);
        console.log("users arr: " + users); 
        // console.log(`url= ${baseUrl}/users/${users[0]}${jsonExt}`);
        for (let i = 0; i < users.length; i++){
          console.log("inside for getuserby id");
          $.get(`${baseUrl}/users/${users[i]}${jsonExt}`
          , function(data, status){
          console.log("success");
          }).then((data)=>{
            console.log("then key: " + users[i]);
            if (email == data.email && password == data.password){
              let userKey = users[i];
              let userId = data.id;
              loadUserDashboard(userKey, userId);
            }
        // console.log("data.id: " + data.id);
      })
    }
    }) 
                
  } 