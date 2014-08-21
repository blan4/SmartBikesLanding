(function($){
  $(document).ready(function(){
    $('.answer').hide();

    $(document).on('click', '.question', function(event) {
      event.preventDefault();
      var $self = $(this);
      var $answer = $('.answer[data-answer='+ $self.data('question') +']');
      if (!$answer.is(':hidden')) {
        $answer.hide();
      } else {
        $('.answer').hide();
        $answer.show();
      }
    });
  });
})(jQuery);