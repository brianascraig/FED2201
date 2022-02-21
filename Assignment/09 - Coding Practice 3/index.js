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
    
}
