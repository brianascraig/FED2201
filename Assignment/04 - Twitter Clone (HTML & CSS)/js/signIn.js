function displaySignInForm(){
    console.log("inside displaySignInForm");
    let signInForm = $(".signInForm");
    let signInFormSection = $(".signInFormSection");
    signInFormSection.toggleAttribute("hidden");
    signInForm.addEventListener("submit", handleSignInSubmit)
}

function handleSignUpSubmit(event) {
    event.preventDefault();
    let email = $("#emailCurrentUser").val();
    let password = $("#passwordCurrent").val();
    getUserByCredentials(email, password);
  }

  function getUserByCredentials(email, password){
    let users = [];
    $.get(`${baseUrl}/users${jsonExt}`, function(data, status){
      console.log("success")
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
            console.log("then id" + id)
            if (email == data.email && password == data.password){
              let userId = data.id;
              let userKey = users[i];
              loadUserDashboard(userId, userKey);
            }
        console.log("data.id: " + data.id);
        console.log("data " + data);
      })
    }
    }) 
                
  } 