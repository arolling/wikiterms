$(document).ready(function() {
  $("h3, h4").click(function(){
    $(this).next().toggle();
  });
});
