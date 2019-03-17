//constructor function -- business logic
function Trip(city,landmark,time,notes) {
  this.city = city;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

function resetFields(){
  $("input#new-location").val("");
  $("input#new-landmark").val("");
  $("input#time").val("");
  $("input#notes").val("");
}

//user-interface
$(document).ready(function() {
  $('form#new-trip').submit(function(event){
    event.preventDefault();

    var inputPlace = $('input#new-location').val();
    var inputSite = $('input#new-landmark').val();
    var inputTime = $('input#time').val();
    var inputNotes = $('input#notes').val();

    var newTrip = new Trip(inputPlace,inputSite,inputTime,inputNotes);

    $('ul#trips').append("<li><span class='tripList'>" + newTrip.city + "</span></li>");

    $('.tripList').last().click(function() {
      $('#show-trips').show();
      $('#show-trips h2').text(newTrip.city);
      $('.city').text(newTrip.city);
      $('.site').text(newTrip.landmark);
      $('.year').text(newTrip.time);
      $('.favorites').text(newTrip.notes);
    });
    resetFields();
  });
});
