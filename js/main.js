$('.signin').on('click', function() {
  $('.modal').fadeIn('2000');
});
$('.close').on('click', function () {
  $('.modal').fadeOut('2000');
});
$('.submit').on('click', function () {
  $('input').addClass('error');
  $('input').hover( function() { $(this).removeClass('error') }, function() { $(this).addClass('error') } );
});
// function clickPage() {
//   if (($('.modal').data('clicked')) && ($('.getstarted').data('clicked'))) {
//     $('.modal').fadeIn('2000');
//   } else {
//     $('.modal').fadeOut('2000');
//   }
// }
// clickPage();
$('.modal').on('click', function() {
  $(this).fadeOut('2000');
});
$('.getstarted').click(function(e) {
  e.stopPropagation();
});
