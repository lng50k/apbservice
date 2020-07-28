jQuery(function($){
   function open(url, width, height){
      window.open(url, 'share_window', 'width='+width+', height='+height+', top='+($(window).height()/2-(height-50))+', left='+($(window).width()/2)+', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
   }
   $('#share_facebook').on('click', function(e){
      e.preventDefault();
      FB.ui({
         method: 'share',
         href: document.location.toString()
      }, function(response){});
   });
   $('#share_twitter').on('click', function(e){
      e.preventDefault();
      open('http://twitter.com/share?' +
           'url=' + escape(document.location.toString()) +
           '&text=' + escape(smTitle),
           550, 300);
   });
   $('#share_pinterest').on('click', function(e){
      e.preventDefault();
      open('http://pinterest.com/pin/create/button/?' +
           'url=' + escape(document.location.toString()) +
           '&media=' + escape(smImage) +
           '&description=' + escape(smDescription),
           550, 300);
   });
   $('#share_print').on('click', function(e){
      e.preventDefault();
      window.print();
   });
});

