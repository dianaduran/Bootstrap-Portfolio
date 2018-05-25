/* Attach a submit handler to the form */
$("#contact-form").submit(function(event) {
    var ajaxRequest;

   /* Stop form from submitting normally */
   event.preventDefault();

   /* Clear result div*/
   $("#messages").html('');

   /* Get from elements values */
   var values = $(this).serialize();
   var url="././mail/contact_me.php";

   /* Send the data using post and put the results in a div */
   /* I am not aborting previous request because It's an asynchronous request, meaning 
      Once it's sent it's out there. but in case you want to abort it  you can do it by  
      abort(). jQuery Ajax methods return an XMLHttpRequest object, so you can just use abort(). */
      ajaxRequest= $.ajax({
           url: url,
           type: "post",
           data: values
       });

     /*  request cab be abort by ajaxRequest.abort() */

    ajaxRequest.done(function (response, textStatus, jqXHR){
         // show successfully for submit message
         $("#messages").html('Submitted successfully');
    });

    /* On failure of request this function will be called  */
    ajaxRequest.fail(function (){

      // show error
      $("#messages").html('There is error while submit');
    });
})