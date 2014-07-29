$(document).on('submit', 'form#js-subscribe', function(ev) {
  ev.preventDefault();
  var $email = $("input[name='email']");
  var $respBox = $("#responseBox");
  var data = {email: $email.val()};
  $.ajax({
    type: 'POST',
    url: '/subscriptions',
    data: JSON.stringify(data),
    dataType: 'json',
    contentType: 'application/json',
    success: function(res) {
      if (res && !res.error) {
        $email.val(''); 
        $respBox.html("<p>Success</p>");
      } else {
        $respBox.html("<p>"+res.error+"</p>");
      }
    }
  });
});