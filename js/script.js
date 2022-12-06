$(document).ready(function() {

  $('#markAllAsRead').click(function() {
    if($(".unread").length > 0) {
      $('.notification').removeClass('unread');
      $('#markAllAsRead').text("Mark all as unread");
    }else {
      $('.notification').addClass('unread');
      $('#markAllAsRead').text("Mark all as read");
    }
  });

});