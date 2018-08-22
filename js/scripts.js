$(document).ready(function() {
    var age = parseInt(prompt("How old are you?"));
      if (age > 18) {
      $('#avengers').show();
      $('#dp2').show();
      $('#mi5').show();

    } else if (age < 18) {
      $('#avengers').show();

    } else if (age > 55) {
      $('#avengers').show();
      $('#dp2').show();
      $('#mi5').show();
      alert("You Qualify for Discount!");
    }

    $("#movie1").click(function(event){
      $(".tabcontent").show();
      event.preventDefault

 });
});



//     $(".btn#movie1").click(function(event) {
//     $("#movie1").fadeToggle();
//     event.preventDefault
// });
//
//     $(".btn#movie2").click(function(event) {
//     $("#movie2").fadeToggle();
//     event.preventDefault
// });
//
//   $(".btn#movie3").click(function(event) {
//   $("#movie3").fadeToggle();

// });
