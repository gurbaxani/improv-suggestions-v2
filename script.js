$(document).ready(function() {
  $('.nav-button').click(function() {
      var message = $(this).data('message');
      $('#message-text').text(message);
      $('#main-screen').fadeOut(500, function() {
          $('#message-screen').fadeIn(500);
      });
  });

  $('#back-button').click(function() {
      $('#message-screen').fadeOut(500, function() {
          $('#main-screen').fadeIn(500);
      });
  });
});
