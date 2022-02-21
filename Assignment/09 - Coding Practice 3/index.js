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
    console.log("date inside handleSubmit" + date);
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
    let daysElapsed = timeElapsed/ (milliseconds * seconds * minutes * hours);
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

function handleBetweenDatesFormSubmit(event){
    event.preventDefault();
    let firstDate = $("#firstDate");
    let secondDate = $("#secondDate");
    calculateDaysBetween(firstDate, secondDate);
}

function calculateDaysBetween(firstDate, secondDate){
    let firstDate = new Date(firstDate);
    let secondDate = new Date(secondDate); 
    let firstDateYear = firstDate.getFullYear();
    let secondDateYear = secondDate.getFullYear();
    let milliseconds = 1000;
    let minutes = 60;
    let seconds = 60;
    let hours = 24
    if (firstDateYear > secondDateYear){
        let timeElapsed = firstDate.getTime - secondDate.getTime();
        let daysElapsed = timeElapsed/ (milliseconds * seconds * minutes * hours);
        displayDaysBetween(daysElapsed);
    } else if (secondDateYear > firstDateYear){
        let timeElapsed = secondDate.getTime - firstDate.getTime();
        let daysElapsed = timeElapsed/ (milliseconds * seconds * minutes * hours);
        displayDaysBetween(daysElapsed);
    }
}

function displayDaysFromToday(daysElapsed){
    let daysBetween = $(".daysBetween");
    daysBetween.append(`${daysElapsed}`);
}