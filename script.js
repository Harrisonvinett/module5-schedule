// Moment.js/ lets user see time in header
let currentDay = moment().format('LL')
let interval = setInterval(function() {
    $('#currentDay').html(currentDay);
  },  10);

let hour = moment().hours();


// hour variables
const timeEigthAm = $('#8am');
const timeNineAm = $("#9am");
const timeTenAm = $("#10am");
const timeElevenAm = $("#11am");
const timeTwelvePm = $("#12pm");
const timeOnePm = $("#13pm");
const timeTwoPm = $("#14pm");
const timeThreePm = $("#15pm");
const timeFourPm = $("#16pm");
const timeFivePm = $("#17pm");

let hourLog;
let input;



function initCal() {


  const init8 = JSON.parse(localStorage.getItem('08:00 am'))
  timeEigthAm.val(init8)

  const init9 = JSON.parse(localStorage.getItem("09:00 am"));
  timeNineAm.val(init9);

  const init10 = JSON.parse(localStorage.getItem("10:00 am"))
  timeTenAm.val(init10);
  
  const init11 = JSON.parse(localStorage.getItem("11:00 am"))
  timeElevenAm.val(init11);
  
  const init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  timeTwelvePm.val(init12);
  
  const init13 = JSON.parse(localStorage.getItem("01:00 pm"))
  timeOnePm.val(init13);
  
  const init14 = JSON.parse(localStorage.getItem("02:00 pm"))
  timeTwoPm.val(init14);
  
  const init15 = JSON.parse(localStorage.getItem("03:00 pm"))
  timeThreePm.val(init15);
 
  const init16 = JSON.parse(localStorage.getItem("04:00 pm"))
  timeFourPm.val(init16);
  
  const init17 = JSON.parse(localStorage.getItem("05:00 pm"))
  timeFivePm.val(init17);
} 

function timeStamp () {
      
  $(".form-control").each(function () {
      let timeTell = parseInt($(this).attr("id"));
      hour = parseInt(hour);
    

      if (hour > timeTell) {
          $(this).addClass('past');
      } else if (hour < timeTell) {
          $(this).addClass('future');
      } else {
          $(this).addClass('present');
      }
  });
}

$(document).ready(function(){
  initCal()
  timeStamp()
  

  // allows user to press button and save to loacl storgage 
  $(".saveBtn").on("click", function(){
    hourLog = $(this).siblings(".input-group-prepend").text().trim();
    input = $(this).siblings(".form-control").val().trim();
    console.log(input,' at ', hour)
    localStorage.setItem(hourLog, JSON.stringify(input));

  })

});

