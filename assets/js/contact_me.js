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
   };
   console.log(values);
   var url="contact_me.php";
   console.log(url);

   $.post(url, values, function(data, status){
       alert("Data: " + data + "\nStatus: " + status);
   });

    //   ajaxRequest= $.ajax({
    //        url: url,
    //        type: "POST",
    //        data: values
    //    });

    // ajaxRequest.done(function (data, status){
    //      // show successfully for submit message
    //      console.log(status);
    //      console.log(data);
    //      $("#messages").html('Submitted successfully');
    // });

    // /* On failure of request this function will be called  */
    // ajaxRequest.fail(function (){
    //   // show error
    //   $("#messages").html('There is error while submit');
    // });
})