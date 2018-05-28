/* Attach a submit handler to the form */
$("#contact-form").submit(function(event) {
    var ajaxRequest;

   /* Stop form from submitting normally */
   event.preventDefault();

   /* Clear result div*/
   $("#messages").html('');

   var values = {
       name:$("#name").val(),
       email_address:$("#email").val(),
       message:$("#message").val()
   }
   console.log(values);
   var url=$("#contact-form").attr('action');
   console.log(url);

      ajaxRequest= $.ajax({
           url: url,
           type: "post",
           data: values
       });

    ajaxRequest.done(function (response, textStatus, jqXHR){
         // show successfully for submit message
         $("#messages").html('Submitted successfully');
    });

    // /* On failure of request this function will be called  */
    // ajaxRequest.fail(function (){
    //   // show error
    //   $("#messages").html('There is error while submit');
    // });
})