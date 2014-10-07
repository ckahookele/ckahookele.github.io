/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("Bouncing");

$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});

$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});

var vx = Math.random() * 10 - 5;
var x = $(window).width() / 2;

setInterval(function () {
    $('.logo').css({
        left: x
    });
    x = x + vx;
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
    $('.logo').css({
        left: x,
        top: y
    });
    x = x + vx;
    y = y + vy;
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var x = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var x = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
  if (y < 0) {
      y = 0;
      vy = -vy;
  } else if (y > $(window).height()) {
      y = $(window).height();
      vy = -vy;
  }
}, 20);