$(document).ready(function(){
    var menu = $(".go_btn > li");
    var contents = $("#all > section");
    
    // var logo=$(".logo");
    // var top=$("#all");
     
     menu.click(
     function(event){
        event.preventDefault();
        var tg1 = $(this);
        var i = tg1.index();


        var section = contents.eq(i+1);	   
        var tt = section.offset().top;
        
         $('html, body').stop().animate({scrollTop:tt-80});
         
         
     });

     $(".logo").click(
         function(event){
            event.preventDefault();
            var tt=$("#all").offset().top;
            $('html, body').stop().animate({scrollTop:tt});
         }
     )
     $("#up_box").click(
        function(event){
           event.preventDefault();
           var tt=$("#all").offset().top;
           $('html, body').stop().animate({scrollTop:tt});          
        }
    )
     



});

