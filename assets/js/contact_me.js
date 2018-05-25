// Contact Form Scripts

$(function() {

    
    $("#contact-form").submit(function(event){

        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();

        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();

    
         console.log(email);
    if(email!=""){
        if (name.indexOf(' ') >= 0) {
            name = name.split(' ').slice(0, -1).join(' ');
         }
         $.ajax({
         url: $("#contact-form").attr('action'),
         type: "POST",
        data: {
        name: name,
        email: email,
        message: message
       },
      }).done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
    }).fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });
    
}

else{
    console.log("The following error occurred");
}
});

    // $("#contact-form input,#contact-form textarea").jqBootstrapValidation({
    //     preventSubmit: true,
    //     submitError: function($form, event, errors) {
    //         // additional error messages or events
    //     },
    //     submitSuccess: function($form, event) {
    //         event.preventDefault(); // prevent default submit behaviour
    //         // get values from FORM
    //         var name = $("input#name").val();
    //         var email = $("input#email").val();
    //         var message = $("textarea#message").val();
    //       // Check for white space in name for Success/Fail message
    //         if (name.indexOf(' ') >= 0) {
    //             name = name.split(' ').slice(0, -1).join(' ');
    //         }
    //         $.ajax({
    //             url: $("#contact-form").attr('action'),
    //             type: "POST",
    //             data: {
    //                 name: name,
    //                 email: email,
    //                 message: message
    //             },
    //             cache: false,
    //             success: function() {
    //                 // Success message
    //                 $('#messages').html("<div class='alert alert-success'>");
    //                 $('#messages > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#messages > .alert-success')
    //                     .append("<strong>Your message has been sent. </strong>");
    //                 $('#messages > .alert-success')
    //                     .append('</div>');

    //                 //clear all fields
    //                 $('#contact-form').trigger("reset");
    //             },
    //             error: function() {
    //                 // Fail message
    //                 $('#messages').html("<div class='alert alert-danger'>");
    //                 $('#messages > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#messages > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that my mail server is not responding. Please try again later!"));
    //                 $('#messages > .alert-danger').append('</div>');
    //                 //clear all fields
    //                 $('#contact-form').trigger("reset");
    //             },
    //         });
    //     },
    //     filter: function() {
    //         return $(this).is(":visible");
    //     },
    // });

    // $("a[data-toggle=\"tab\"]").click(function(e) {
    //     e.preventDefault();
    //     $(this).tab("show");
    // });
});


/*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//     $('#messa').html('');
// });
