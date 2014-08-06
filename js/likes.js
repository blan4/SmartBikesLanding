(function($){
  window.Share = {
    vk: function(url, title, description, img) {
      url  = 'http://vkontakte.ru/share.php?';
      url += 'url='          + encodeURIComponent(url);
      url += '&title='       + encodeURIComponent(title);
      url += '&description=' + encodeURIComponent(description);
      url += '&image='       + encodeURIComponent(img);
      url += '&noparse=true';
      Share.popup(url);
    },
    popup: function(url) {
      window.open(url,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }
  }
})(jQuery);