$('.light').hover(function() {
  // mouseon
  $('.tag, .one').addClass('show');

}, function() {
  // mouseout
  $('.space, .tag, .title').removeClass('show');
})



$('.dark').hover(function() {
  // mouseon
  $('.tag, .two').addClass('show');

}, 

function() {
  // mouseout
  $('.space, .tag, .title').removeClass('show');
})



$('.mix').hover(function() {
  // mouseon
  $('.tag, .three').addClass('show');


}, 
function() {
  // mouseout
  $('.space, .tag, .title').removeClass('show');
})
