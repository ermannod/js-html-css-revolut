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


// with mouse hover
// $(document).ready(function() {
//     $(".listitem").mouseenter(function(){
//       if ($(this).children(".dropdown").is(":visible")) {
//         $(".dropdown").slideUp();
//       } else {
//         $(".dropdown").slideUp();
//         $(this).children(".dropdown").slideDown();
//       }
//   });
// });
