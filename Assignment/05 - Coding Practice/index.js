function handleApp(){
    let pictureDisplayBtn = document.querySelector(".pictureDisplayBtn");
    pictureDisplayBtn.addEventListener("click", displayPictures);
}

function displayPictures(){
    let body = document.getElementsByTagName("body")[0];
    let challengeImages = body.querySelectorAll("img");
    challengeImages.toggleAttribute("hidden");
}
