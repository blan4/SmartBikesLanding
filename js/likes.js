(function($){
  $(document).ready(function(){
    $("#vkLike").html(VK.Share.button({
      url: 'http://smart-bikes.ru',
      noparse: false
    }, {
      type: 'custom',
      text: '<img src="http://vk.com/images/vk32.png" />'
    }));
  });
})(jQuery);