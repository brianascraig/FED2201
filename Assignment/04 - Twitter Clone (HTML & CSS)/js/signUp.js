let baseUrl = "https://twitter-clone-db-f8da3-default-rtdb.firebaseio.com/";
let jsonExt = ".json";
// $(document).ready(() => {
//   let baseUrl = "https://twitter-clone-db-f8da3-default-rtdb.firebaseio.com/";
//   $.get(`${baseUrl}.json`, function(data, status){
//     console.log("success")
//     // console.log(JSON.parse(data));
//   }).then((data)=>{
//     console.log(data);
//   })
//  
//   // });
// });

 function displaySignUpForm() {
  console.log("inside displaySignUpForm");
  let homePage = $(".homePageSection");
  // homePage.toggleAttribute("hidden");
  let signUpForm = $("#signUpForm");
  let signUpFormSection = $(".signUpFormSection");
  // signUpFormSection.toggleAttribute("hidden");
  signUpForm.submit(handleSignUpSubmit);
}

function handleSignUpSubmit(event) {
  event.preventDefault();
  let id = Math.floor(Math.random() * 400) + 1;
  let name = $("#name").val();
  let email = $("#email").val();
  let password = $("#password").val();
  postNewUser(id, name, email, password);
}

function postNewUser(id, name, email, password) {
 $.post(`${baseUrl}/users${jsonExt}`,
    JSON.stringify({
      id: id,
      name: name,
      email: email,
      password: password
  }   ));
  createUserSession(id);
}

function getUserById(id){
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
          if (id == data.id){
            let userId = data.id;
            let userKey = users[i];
            loadUserDashboard(userKey, userId);
          }
      console.log("data.id: " + data.id);
      console.log("data " + data);
    })
  }
  }) 
              
} 

  


function createUserSession(id){
  console.log("inside createUserSession");
  console.log("user id = " + id);
  getUserById(id);
}
