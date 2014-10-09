/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("Rikka");
var count = 0;
$(window).on('mousemove', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
   if(count > 5) {
       $('.logo').toggleClass('rotated');
   count = 0;
   }
   count = count + 1;
});

