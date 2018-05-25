
$(function() {
    
    var formMessages = $('.messages');

  
    $('#contact-form').on('submit',function(event) {
       
        event.preventDefault();

 
    console.log($('#contact-form').serialize());
    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $('#contact-form').attr('action'),
        data: $('#contact-form').serialize()
    }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

    });

    });