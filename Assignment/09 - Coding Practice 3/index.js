$(document).ready(()=>{
    let dateForm = $(".dateForm");
    let betweenDatesForm =$(".betweenDatesForm");
    let fromTodayBtn = $(".fromTodayBtn");
    dateForm.submit(handleDateFormSubmit);
    fromTodayBtn.click(getDaysFromToday);
    betweenDatesForm.submit(handleBetweenDatesFormSubmit)
});

function handleDateFormSubmit(event){
    event.preventDefault();
    let date = $("#date").val();
    calculateDaysUntil(date);
}

function calculateDaysUntil(date){
    let futureDate = new Date("01/01/2030");
    let customDate = new Date(date);
    let timeElapsed = futureDate.getTime() - customDate.getTime();
    let milliseconds = 1000;
    let minutes = 60;
    let seconds = 60;
    let hours = 24
    let daysElapsed = Math.floor(timeElapsed/ (milliseconds * seconds * minutes * hours));
    displayDaysFromToday(daysElapsed);
}

function getDaysFromToday(){
    let date = new Date();
    let today = date.getTime();
    let futureDate = new Date("01/01/2030");
    let timeElapsed = futureDate.getTime() - today;
    console.log("timeElapsed inside getDaysFromToday: " + timeElapsed);
    let milliseconds = 1000;
    let minutes = 60;
    let seconds = 60;
    let hours = 24;
    let daysElapsed = Math.floor(timeElapsed/ (milliseconds * seconds * minutes * hours));
    console.log("daysElapsed inside getDaysFromToday: " + daysElapsed);
    displayDaysFromToday(daysElapsed);
}

function displayDaysFromToday(daysElapsed){
    console.log("inside display")
    let daysReveal = $(".daysReveal");
    daysReveal.append(`${daysElapsed}`);
}

function handleBetweenDatesFormSubmit(event){
    event.preventDefault();
    let firstDate = $("#firstDate").val();
    let secondDate = $("#secondDate").val();
    calculateDaysBetween(firstDate, secondDate);
}

function calculateDaysBetween(firstDate, secondDate){
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate); 
    let milliseconds = 1000;
    let minutes = 60;
    let seconds = 60;
    let hours = 24
    let timeElapsed = Math.abs(secondDate.getTime() - firstDate.getTime());
    let daysElapsed = Math.floor(timeElapsed/ (milliseconds * seconds * minutes * hours));
    displayDaysBetween(daysElapsed);
}

function displayDaysBetween(daysElapsed){
    let daysBetween = $(".daysBetween");
    daysBetween.append(`${daysElapsed}`);
}