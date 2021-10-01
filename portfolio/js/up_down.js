//업다운 아이콘 
$(document).ready(function(){
    var navHeight = $("#about").height(); 
    $("#up_box").hide();

    $(window).scroll(function(){  
        var rollIt1 = $(this).scrollTop() >= navHeight;
        
        if(rollIt1){ 
            setTimeout(function(){
                $("#up_box").fadeIn(1000);
            },1000);
        }
        else{
            $("#up_box").hide();
        }

    });
});