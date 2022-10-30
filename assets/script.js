// show current time and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
// set up time based color coding logic for past present and future
// set variable based on current time compared to timeblocks 
    function getTime(blockHour) {
        var currentHour = moment().hours();
        if (blockHour < currentHour) return 'past'
        if (blockHour === currentHour) return 'present'
        if (blockHour > currentHour) return 'future'
    }

    function hourUpdater() {
    // log just the number and not 'hour' 
        $('.time-block').each(function () {
            var blockhour = parseInt($(this).attr('id').split('-')[1]);
    // loop through timeblocks to determine class to call   
    console.log()
            switch (getTime(blockHour)) {
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
                break
            }
        });
    }


// logic of button click event 
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.tasks').val();
        var time = $(this).parent().attr('id');
// save in local storage
        localStorage.setItem(time, value);
    });
// load saved data from local storage
    hourUpdater();
    
    $('#hour-9 .tasks').val(localStorage.getItem('hour-9'));
    $('#hour-10 .tasks').val(localStorage.getItem('hour-10'));
    $('#hour-11 .tasks').val(localStorage.getItem('hour-11'));
    $('#hour-12 .tasks').val(localStorage.getItem('hour-12'));
    $('#hour-13 .tasks').val(localStorage.getItem('hour-13'));
    $('#hour-14 .tasks').val(localStorage.getItem('hour-14'));
    $('#hour-15 .tasks').val(localStorage.getItem('hour-15'));
    $('#hour-16 .tasks').val(localStorage.getItem('hour-16'));
    $('#hour-17 .tasks').val(localStorage.getItem('hour-17'));

});