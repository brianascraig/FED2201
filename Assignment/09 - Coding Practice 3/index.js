$(document).ready(()=>{
    let dateForm = $(".dateForm");
    let fromTodayBtn = $(".fromTodayBtn");
    dateForm.submit(handleDateFormSubmit);
    fromTodayBtn.click(getDaysFromToday);
});

function handleDateFormSubmit(event){
    event.preventDefault();
    let date = $("#date").val();
    console.log("date inside handleSubmit" + date);
    calculateDaysUntil(date);
}

function calculateDaysUntil(date){
    let futureDate = new Date("01/01/2030");
    let customDate = new Date(date);
    console.log("date");
}

function getDaysFromToday(){
    let date = new Date();
    let today = date.getTime();
    let futureDate = new Date("01/01/2030");
    let timeElapsed = futureDate.getTime() - today;
    let milliseconds = 1000;
    let minutes = 60;
    let seconds = 60;
    let hours = 24
    let daysElapsed = timeElapsed/ (milliseconds * seconds * minutes * hours);
    displayDaysFromToday(daysElapsed);
}

function displayDaysFromToday(daysElapsed){
    let daysReveal = $(".daysReveal");
    daysReveal.append(`${daysElapsed}`);
}
