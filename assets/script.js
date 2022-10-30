// show current time and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
// set up time based color coding logic for past present and future
// set variable based on current time compared to timeblocks 
    function whereInTime(blockHour) {
        var currentHour = moment().hours();
        if (blockHour < currentHour) return 'past'
        if (blockHour === currentHour) return 'present'
        if (blockHour > currentHour) return 'future'
    }

    function hourUpdater() {
    // log just the number and not 'hour' 
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
    // loop through timeblocks to determine class to call   
    console.log(blockHour)
            switch (whereInTime(blockHour)) {
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

// populate tasks from local storage
    Array(9).forEach((item, i) => $(`#hour-${i +8} .tasks`).val(localStorage.getItem(`hour-${i +8}`)))

});