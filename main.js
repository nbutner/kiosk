$('#buttonStart').click( function() {
  $('#startScreen').addClass('test');
});

setTimeout(function() {
  $('#startScreen').addClass('test');
}, 5000)

setTimeout(function() {
  $('#startScreen').removeClass('test');
}, 15000)

$('.mainNav a').click( function(){
  console.log('$(this)');
    $('.content-box').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
});

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
