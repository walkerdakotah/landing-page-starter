$(document).ready(function(){
    $('.mktgform').each(function(){
        var $mform = $(this);
        if($mform.find('input#email').attr('required') === false){
          var $emailvalid = false;
        }else{
            var $emailvalid = true;
        };
        if($emailvalid === true){
            $mform.addClass('email_req');
        }else{
            if($emailvalid === false){
                $mform.addClass('phone_req');
            }
        }
        var $emailreqform = $('.mktgform.email_req');
        var $phonereqform = $('.mktgform.phone_req');
        $emailreqform.each(function(){
            $(this).validate({
                rules: {
                    first_name: {required: true, maxlength: 20},
                    last_name: {required: true, maxlength: 20},
                    phone: {required: false, phoneUS: true, minlength: 10},
                    email: {required: true, email: true}
                },
                submitHandler: function(form){
                    if($('input#website').val() === 'http://' && $('input#website2').val().length === 0){
                        $mform.attr('action','https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8');
                        form.submit();
                    }
                }
            });
        });
        $phonereqform.each(function(){
            $(this).validate({
                rules: {
                    first_name: {required: true, maxlength: 20},
                    last_name: {required: true, maxlength: 20},
                    phone: {required: true, phoneUS: true, minlength: 10},
                    email: {required: false, email: true}
                },
                submitHandler: function(form){
                    if($('input#website').val() === 'http://' && $('input#website2').val().length === 0){
                        $mform.attr('action','https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8');
                        form.submit();
                    }
                }
            });
        });
    });
    $('label.error').delay(3000)
    .fadeOut(function() {
        $(this).remove();
    });
    $('input#phone').keydown(function(event) {
        // Allow special chars + arrows
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9
            || event.keyCode == 27 || event.keyCode == 13
            || (event.keyCode == 65 && event.ctrlKey === true)
            || (event.keyCode >= 35 && event.keyCode <= 39)){
            return;
    }else {
            // If it's not a number stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});
