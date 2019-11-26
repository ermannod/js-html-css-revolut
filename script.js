$(document).ready(function() {
    $(".listitem").click(function(){
      if ($(this).children(".dropdown").is(":visible")) {
        $(".dropdown").slideUp();
      } else {
        $(".dropdown").slideUp();
        $(this).children(".dropdown").slideDown();
      }
  });
});
