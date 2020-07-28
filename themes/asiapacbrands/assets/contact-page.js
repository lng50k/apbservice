jQuery(function($){
   $('#form-contact-form').on('submit', function(e){
      e.preventDefault();
      var data = {};
      var valid = true;
      $('#form-contact-form *').filter(':input').each(function(){
         var name = $(this).attr('name');
         var val = $(this).val();
         switch ( name ) {
            case 'first-name':
            case 'last-name':
            case 'email':
            case 'subject':
            case 'message':
               if ( val.length > 0 ) {
                  data[name] = val;
                  $(this).parents('div.form-group').removeClass('has-error');
               } else {
                  valid = false;
                  $(this).parents('div.form-group').addClass('has-error');
               }
            default:
               if ( val != 'Submit' ) {
                  data[name] = val;
               }
               break;
         }
      });
      if ( valid ) {
         $.post(endpoint + 'submit', data, function(result){
             $('#contact-form-thanks').show();
             $('#contact-form-wrapper').hide();
         });
      }
   });
});
