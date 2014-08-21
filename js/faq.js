(function($){
  $(document).ready(function(){
    $('.answer').css('display', 'none');

    $(document).on('click', '.question', function(event) {
      event.preventDefault();
      $('.answer').css('display', 'none');
      var $self = $(this);
      $('.answer[data-answer='+ $self.data('question') +']').css('display', 'block');
    });
  });
})(jQuery);