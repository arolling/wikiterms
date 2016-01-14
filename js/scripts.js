$(document).ready(function() {
  $("h3, h4").click(function(){
    $(this).next().toggle();
  });

  $("#side-button").click(function() {
    $(".side-bar").toggle();
    $("#side-button").toggle();
    $("#side-button-close").show();
  });

  $("#side-button-close").click(function() {
    $(".side-bar").toggle();
    $("#side-button-close").toggle();
    $("#side-button").show();

  });

  $("#arg-btn").click(function() {
    function newFunc (p1) {
      alert(p1);
    }
    newFunc("hey");
  });
});
