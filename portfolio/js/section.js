//화면 사라지고 나타나게 하는것(about)  
$(document).ready(function(){

    var navHeight = $("#about").height()-400; 
    var navHeight1 =1400;                             
    var navHeight2 =2200;                           
    var navHeight3 = $("#about").height(); 


    $("#about_all").hide();
    $("#skill_all").hide(); 
    $("#project_all").hide();
    $("#up_box").hide();

    $(window).scroll(function(){  
        var rollIt1 = $(this).scrollTop() >= navHeight && $(this).scrollTop()<=1400; 
        var rollIt2 = $(this).scrollTop() >= navHeight1 && $(this).scrollTop()<=2200;
        var rollIt3 = $(this).scrollTop() >= navHeight2 ;    
        var rollIt4 = $(this).scrollTop() >= navHeight3;
        var rollIt5 = $("#all").height();
        
        
    if(rollIt1){ 
            $("#about_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#about_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#about_ttl").show();
            $("#about_all").hide();
        }

    if(rollIt2){ 
            $("#skill_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#skill_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#skill_ttl").show();
            $("#skill_all").hide();
        }

    if(rollIt3){ 
            $("#project_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#project_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#project_ttl").show();
            $("#project_all").hide();
        }

    if(rollIt4){ 
            setTimeout(function(){
                $("#up_box").fadeIn(1000);
            },1000);
        }else{
            setTimeout(function(){
                $("#up_box").fadeOut();
             },1000);
        }
     
        
    });
});
 