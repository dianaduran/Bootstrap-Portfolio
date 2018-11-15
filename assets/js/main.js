$(document).ready(function(){

    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
        
       });

 
       //change text button
       $('.seeMore').hover(function() {
        $(this).find('span').text('dianaduran17@gmail.com');
    }, function() {
        $(this).find('span').text('See more');
    });
});