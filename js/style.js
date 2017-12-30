// A $( document ).ready() block.
$( document ).ready(function() {
  $("#buynow").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    }, 1000);
  });
});