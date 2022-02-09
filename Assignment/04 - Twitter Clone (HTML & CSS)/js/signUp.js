$(document).ready(() => {
  let baseUrl = "https://twitter-clone-db-f8da3-default-rtdb.firebaseio.com/";
  $.get(`${baseUrl}.json`, function(data, status){
    console.log("success")
    // console.log(JSON.parse(data));
  }).then((data)=>{
    console.log(data);
  })
  // $.ajax({
  //   contentType: "application/json; charset=utf-8",
  //   headers: {
  //     accept: "application/json; odata=verbose",
  //   },
  //   type: "GET",
  //   url: `${baseUrl}`,
  //   success: (data) => {
  //     console.log(data);
  //   },
  //   error: (error) => {
  //     console.log(error);
  //   },
  // });
});

 function displaySignUpForm() {
  console.log("inside displaySignUpForm");
  let homePage = document.querySelector(".homePageSection");
  // homePage.toggleAttribute("hidden");
  let signUpForm = document.getElementById("signUpForm");
  let signUpFormSection = document.querySelector(".signInFormSection");
  // signUpFormSection.toggleAttribute("hidden");
  signUpForm.addEventListener("submit", handleSignUpSubmit);
}

function handleSignUpSubmit(event) {
  event.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let signUpSuccess = postNewUser(name, email, password);
  // if (signUpSuccess) {
  //   createUserSession();
  // } else {
  //   alert("Sign unsuccessful. Please try again.");
  // }
}

function postNewUser(name, email, password) {
  let baseUrl = "https://twitter-clone-db-f8da3-default-rtdb.firebaseio.com/";
  $.post(`${baseUrl}.json`, function(data, status){
    console.log("success")
    // console.log(JSON.parse(data));
  }).then((data)=>{
    console.log(data);
  })
  //   let postUser = new Promise(function(resolve, reject){
  //         console.log("working");
  //      let req = new XMLHttpRequest();
  //      req.open("POST", `${baseUrl}/users`)
  //      reject();
  //      resolve();
  //  });
  //  postUser.then(
  //     //     function
  //     // )

  //     $.post(`${baseUrl}`,
  //     {
  //       name: `${name}`,
  //       email: `${email}`,
  //       password: `${password}`
  //     },
  //     function(data, status){
  //       alert("Data: " + data + "\nStatus: " + status);
  //     });
  // }

  //Get all
  // db.collection('users').get().then(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     console.log(doc);
  //   })
  // });
}

// export var
