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
  let user = [];
  $.get(`${baseUrl}/users${jsonExt}`, function(data, status){
    console.log("success")
    // console.log(JSON.parse(data));
    
    }).then((data)=>{
      for ( var obj in data){
        console.log("inside for");
        console.log("obj: " + obj);
        if (obj.id == id){
          console.log("inside loop");
          let userId = obj.id;
          let userName = obj.name;
          user.push({userId: userId, name: userName
          })
          user.push("test");
        }
      }
      console.log(data);
      console.log("users arr: " + user);
  })                 
}

function createUserSession(id){
  console.log("inside createUserSession");
  console.log("user id = " + id);
  getUserById(id);
}
