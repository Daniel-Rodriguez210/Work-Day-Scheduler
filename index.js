var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);

$(document).ready(function() {


$(".saveButton").on("click", function() {
    textValue = $(this).siblings("#textarea").val();
    hourBlock = $(this).parent().attr("id");
    
    localStorage.setItem(hourBlock, textValue);
  });

  $("#hour1 #textarea").val(localStorage.getItem("hour1"));
  $("#hour2 #textarea").val(localStorage.getItem("hour2"));
  $("#hour3 #textarea").val(localStorage.getItem("hour3"));
  $("#hour4 #textarea").val(localStorage.getItem("hour4"));
  $("#hour5 #textarea").val(localStorage.getItem("hour5"));
  $("#hour6 #textarea").val(localStorage.getItem("hour6"));
  $("#hour7 #textarea").val(localStorage.getItem("hour7"));
  $("#hour8 #textarea").val(localStorage.getItem("hour8"));
  $("#hour9 #textarea").val(localStorage.getItem("hour9"));




});
