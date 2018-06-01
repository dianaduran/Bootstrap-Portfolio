
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

    var that=$("#contact-form"),
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
         url:"../mail/contact_me.php",
         type:"POST",
         data:data,
         cache: false,
         success:function(response){
            console.log(response);
            $("#messages").html('Submitted successfully');
            $('#contact-form')[0].reset();
         },
         fail:function (){
            //   // show error
              $("#messages").html('There is error while submit');
              $('#contact-form')[0].reset();
            }
     });
})
})