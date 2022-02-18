function loadUserDashboard(userKey, userId) {
  let dashboard = $(".dashboardSection");
  let userNameBtn = $(".userNameBtn");
  let createGrapevineForm = $(".createGrapevineForm");
  console.log("=====INSIDE DASHBOARD=====");
  console.log("userKey" + userKey);
  console.log("user Id: " + userId);
  displayGrapevines(userKey);
  displayTrends();
  displayUserInfo(userKey);
  createGrapevineForm.submit(handleGrapevineSubmit);
  userNameBtn.click(displayLogout);
}

function displayGrapevines() {
  let grapevines = [];
  let grapevinesSection = $(".grapevinesSection");
  $.get(`${baseUrl}/grapevines${jsonExt}`, function (data, status) {
    console.log("success");
  }).then((data) => {
    for (var key in data) {
      grapevines.push(key);
    }
    console.log(data);
    console.log("grapevines arr: " + grapevines);
    for (let i = 0; i < grapevines.length; i++) {
      console.log("inside for displayGrapevines");
      $.get(
        `${baseUrl}/grapevines/${grapevines[i]}${jsonExt}`,
        function (data, status) {
          console.log("success");
        }
      ).then((data) => {
        let username = data.username;
        let postContent = data.postContent;
        let postDate = data.date;
        let timeElapsed = getTimeElapsed(postDate);
        grapevinesSection.append(`
                <article>
                    <div>
                        <img
                            src="../images/avatar.png"
                            alt="Profile photo avatar"
                            class="userAvatar"
                        />
                        <span>${username}</span>
                        <span>${timeElapsed}</span>
                    </div>
                    <div>
                        <p>${postContent}</p>
                    </div>
                </article>`);
        console.log("data.username: " + data.username);
        console.log("data content" + data.postContent);
      });
    }
  });
}

function getTimeElapsed(postDate){
  let postDate = postDate;
  let postMinute = postDate.getMinutes();
  let postHour = postDate.getHours();
  let postDay = postDate.getDay();
  let postMonth = postDate.getMonth();
  let postYear = postDate.getFullYear();
  let dateNow = new Date();
  let minutesElapsed = dateNow.getMinutes() - postMinute;
  let hoursElapsed = dateNow.getHours() - postHour;
  let daysElapsed = dateNow.getDay() - postDay;
  let monthsElapsed = dateNow.getMonth() - postMonth;
  let yearsElapsed = dateNow.getFullYear() - postYear;
  if ((yearsElapsed + monthsElapsed + daysElapsed + hoursElapsed) < 1){
    return `${minutesElapsed} minutes ago`;
  } else if ((yearsElapsed + monthsElapsed + daysElapsed) < 1 && hoursElapsed >= 1){
    return `${hoursElapsed} hours ago`;
  } else if ((yearsElapsed + monthsElapsed) < 1 && daysElapsed > 1) {
    return `${daysElapsed} days ago`;
  } else if (yearsElapsed < 1 && monthsElapsed >= 1){
    return `${monthsElapsed} months ago`;
  } else if (yearsElapsed >= 1){
    return `${yearsElapsed} years ago`;
  }
}

function displayTrends() {
  let trends = [];
  let trendsSection = $(".trendsSection");
  $.get(`${baseUrl}/trends${jsonExt}`, function (data, status) {
    console.log("success");
  }).then((data) => {
    for (var key in data) {
      trends.push(key);
    }
    console.log(data);
    console.log("trends arr: " + trends);
    for (let i = 0; i < trends.length; i++) {
      console.log("inside for displayTrends");
      $.get(
        `${baseUrl}/trends/${trends[i]}${jsonExt}`,
        function (data, status) {
          console.log("success");
        }
      ).then((data) => {
        let title = data.title;
        let hashtag = data.hashtag;
        trendsSection.append(`
                <article>
                    <p>${title}</p>
                    <p class="trendKeyword">#${hashtag}</p>
                </article>`);
        console.log("data.title: " + data.title);
        console.log("data hashtag" + data.hashtag);
      });
    }
  });
}

function displayUserInfo(userKey) {
  let userNameBtn = $(".userNameBtn");
  $.get(`${baseUrl}/users/${userKey}${jsonExt}`, function (data, status) {
    console.log("success");
  }).then((data) => {
    let name = data.name;
    let grapevinesPostForm = $("#post");
    userNameBtn.append(`${name}`);
    grapevinesPostForm.prepend(`<input type="text" name="usernamePost" id="usernamePost" value="${name}" hidden>
    <input type="text" name="userKeyPost" id="userKeyPost" value="${userKey}" hidden>`)
    console.log("data.name: " + data.name);
  });
}

function displayLogout() {
  let logoutContainer = $(".logoutContainer");
  let logoutBtn = $(".logoutBtn");
  logoutContainer.toggleAttribute("hidden");
  logoutBtn.click(logoutUserSession);
}

function logoutUserSession() {
  loadUserDashboard(dummyKey, dummyId);
}

function handleGrapevineSubmit(event) {
  event.preventDefault();
  let date = new Date();
  let grapevineId = Math.floor(Math.random() * 1000) + 1;
  let username = $("#usernamePost").val();
  let userKey = $("#userKey").val()
  let postContent = $("#post").val();
  postToAllGrapevines(date, grapevineId, username, userKey, postContent);
  postToUserGrapevines(date, grapevineId, username, userKey, postContent);
}

function postToAllGrapevines(date, grapevineId, username, userKey, postContent){
  $.post(`${baseUrl}/grapevines${jsonExt}`,
  JSON.stringify({
    grapevineId: grapevineId,
    username: username,
    userKey: userKey,
    postContent: postContent,
    date: date
}   ));
}

function postToUserGrapevines(date, grapevineId, username, userKey, postContent){
  $.post(`${baseUrl}/grapevines/${userKey}${jsonExt}`,
  JSON.stringify({
    grapevineId: grapevineId,
    username: username,
    userKey: userKey,
    postContent: postContent,
    date: date
}   ));
  displayGrapevines();
}
