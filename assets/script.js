// show current time and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
// set up time based color coding logic for past present and future
function getTime(blockhour) {
    var currentHour = moment().hours();
    if (blockhour < currentHour) return 'past';
    if (blockhour === currentHour) return 'present';
    if (blockhour > currentHour) return 'future';
}
// log just the number and not 'hour' 
    $('.time-block').each(function () {
        var blockhour = parseInt($(this).attr('id').split('-')[1]);
// loop through timeblocks to determine class to call   
        switch (getTime(blockhour)) {
            case 'past':
                $(this).addClass('past');
                break;
            case 'present':
                $(this).removeClass('past');
                $(this).addClass('present');
                break;
            case 'future':
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
                default:
                break;



// logic of button click event 

// save in local storage

// set up time based color coding logic
}