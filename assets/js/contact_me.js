
$(document).ready(function() {

    $(".nav-link").on("click", function(){
         $(".nav-link").removeClass("active");
         $( this ).addClass( 'active');
     }); 

/* Attach a submit handler to the form */
$("#contact-form").submit(function(event) {

    /* Stop form from submitting normally */
  event.preventDefault();

     /* Clear result div*/
  $("#messages").html('');

    var that=$(this),
        url=that.attr('action'),
        method=that.attr('method'),
        data={};

        that.find('[name]').each(function(index, value){
           var that=$(this),
               name=that.attr('name'),
               value=that.val();

            data[name]=value;
        });
     $.ajax({
         url:url,
         type:method,
         data:data,
         success:function(response){
            console.log(response);
            $("#messages").html('Submitted successfully');
         },
         fail:function (){
            //   // show error
              $("#messages").html('There is error while submit');
            }
     })
    //     var ajaxRequest;

//    /* Stop form from submitting normally */
//    event.preventDefault();

//    /* Clear result div*/
//    $("#messages").html('');

//    var values = {
//        name:$("#name").val(),
//        email_address:$("#email").val(),
//        message:$("#message").val()
//    };
//    console.log(values);
//    var url="contact_me.php";
//    console.log(url);

//    $.post(url, values, function(data, status){
//        alert("Data: " + data + "\nStatus: " + status);
//    });

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
})