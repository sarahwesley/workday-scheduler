// add current time and clock to scheduler
var timeEl = $("#currentDay");
var currentTime;
clockUpdater();

// load data
loadData();

// set time interval
var clock = setInterval(clockUpdater, 1000)

// show current time using moment
function clockUpdater(){
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}

// check time and highlight "hour" depending on past, present or future task
function checkTimeBlock(){
    var currentHour = currentTime.hours();
    var timeBlock = $(".time-block");
    for(var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];
        if(parseInt(block.id.split("-")[0]) < currentHour){
            $(block).addClass("past");
        }
        else if(parseInt(block.id.split("-")[0]) === currentHour){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

// save item on click
$(".saveBtn").on("click", saveClick);

// save button, save to local storage on click, make sure there is something to save too
function saveClick(event){
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type text into the field to save it on the calendar")
    else{
        localStorage.setItem(time, text);
    }

}


// Load data from local storage to the hour block it was saved with
function loadData(){ 
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}