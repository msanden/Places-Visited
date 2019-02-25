//constructor function -- business logic
function Trip(location,landmark,time,notes) {
  this.city = city;
  this.landmark = site;
  this.time = year;
  this.notes = favorites;
}

//user-interface
$(document).ready(function() {
  $('form#new-trip').submit(function(event){
    event.preventDefault();

    var inputPlace = $('input#new-location').val();
    var inputSite = $('input#new-landmark').val();
    var inputTime = $('input#time').val();
    var inputNotes = $('input#notes').val();

    //new instance
    var newTrip = new Trip(inputPlace, inputSite, inputTime, inputNotes);
    $('ul#trips').append("<li><span class='tripList'>" + newTrip.city + "</span></li>");

    $('.tripList').last().click(function() {
      $('#show-trips').show();
      $('#show-trips h2').text(newTrip.city);
      $('.city').text(newTrip.city);
      $('.site').text(newTrip.site);
      $('.year').text(newTrip.year);
      $('.favorites').text(newTrip.favorites);
    });

  });

});
