function loadUserDashboard(userKey, userId){
    // let dashboard = $(".dashboardSection");  
    console.log("=====INSIDE DASHBOARD====="); 
    console.log("userKey" + userKey);
    console.log("user Id: " +userId);
    displayGrapevines(userKey);
    displayTrends();
    displayUserInfo();
}

function displayGrapevines(){
    let grapevines = [];
    let grapevinesSection = $(".grapevinesSection");
    $.get(`${baseUrl}/grapevines${jsonExt}`, function(data, status){
      console.log("success")
      }).then((data)=>{ 
        for (var key in data) {
          grapevines.push(key);
      }
        console.log(data);
        console.log("grapevines arr: " + grapevines); 
        // console.log(`url= ${baseUrl}/users/${users[0]}${jsonExt}`);
        for (let i = 0; i < grapevines.length; i++){
          console.log("inside for displayGrapevines");
          $.get(`${baseUrl}/grapevines/${grapevines[i]}${jsonExt}`
          , function(data, status){
          console.log("success");
          }).then((data)=>{
            console.log("then id" + id)
            let userName = data.userName;
            let content = data.content; 
            grapevinesSection.append(`
                <article>
                    <div>
                        <img
                            src="../images/avatar.png"
                            alt="Profile photo avatar"
                            class="userAvatar"
                        />
                        <span>${userName}</span>
                    </div>
                    <div>
                        <p>${content}</p>
                    </div>
                </article>`)
        console.log("data.username: " + data.userName);
        console.log("data content" + data.content);
      })
    }
    }) 
                
  } 