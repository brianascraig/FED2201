function loadUserDashboard(userKey, userId){
    let dashboard = $(".dashboardSection"); 
    let userNameBtn = $(".userNameBtn");
    let createGrapevineForm = $(".createGrapevineForm");
    console.log("=====INSIDE DASHBOARD====="); 
    console.log("userKey" + userKey);
    console.log("user Id: " +userId);
    displayGrapevines(userKey);
    displayTrends();
    displayUserInfo(userKey);
    createGrapevineForm.submit(handleGrapevineSubmit);
    userNameBtn.click(displayLogout);
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

function displayTrends(){
    let trends = [];
    let trendsSection = $(".trendsSection");
    $.get(`${baseUrl}/trends${jsonExt}`, function(data, status){
      console.log("success")
      }).then((data)=>{ 
        for (var key in data) {
          trends.push(key);
      }
        console.log(data);
        console.log("trends arr: " + trends); 
        for (let i = 0; i < trends.length; i++){
          console.log("inside for displayTrends");
          $.get(`${baseUrl}/trends/${trends[i]}${jsonExt}`
          , function(data, status){
          console.log("success");
          }).then((data)=>{
            let title = data.title;
            let hashtag = data.hashtag; 
            trendsSection.append(`
                <article>
                    <p>${title}</p>
                    <p class="trendKeyword">#${hashtag}</p>
                </article>`)
        console.log("data.title: " + data.title);
        console.log("data hashtag" + data.hashtag);
      })
    }
    }) 
                
  } 

function displayUserInfo(userKey){
    let userNameBtn = $(".userNameBtn");
        $.get(`${baseUrl}/users/${userKey}${jsonExt}`
        , function(data, status){
        console.log("success");
        }).then((data)=>{
            let name = data.name;
            userNameBtn.append(`${name}`)
        console.log("data.name: " + data.name);
      })            
} 

function displayLogout(){
  let logoutContainer = $(".logoutContainer");
  let logoutBtn = $(".logoutBtn")
  logoutContainer.toggleAttribute("hidden");
  logoutBtn.click(logoutUserSession);
}

function logoutUserSession(){
  
}

function handleGrapevineSubmit(){
    
}

