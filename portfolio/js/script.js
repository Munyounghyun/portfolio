//타이핑 효과
$( document ).ready( function() {

const content="FrontEnd Developer \n 문영현"
const text = document.querySelector(".text");
let i = 0;

function typing(){
    
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    i++;
    }
}
setInterval(typing, 200)
});



//상단메뉴바 고정
$( document ).ready( function() {
    var headerOffset = $('.header').offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > headerOffset.top ) {
        $( '.header' ).addClass( 'header_Fixed' );
      }
      else {
        $( '.header' ).removeClass( 'header_Fixed' );
      }
    });
  } );




 //화면 사라지고 나타나게 하는것(about)  
$(document).ready(function(){

    var navHeight = $("#about").height()-400; 
    $("#about_all").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= navHeight && $(this).scrollTop()<=1400; 
        
    if(rollIt){ 
            $("#about_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#about_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#about_ttl").show();
            $("#about_all").hide();
        }
        
    });
});
 //화면 사라지게 하는것(skill)  
$(document).ready(function(){

    var navHeight =1400;
    $("#skill_all").hide(); 
    
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= navHeight && $(this).scrollTop()<=2200;

    if(rollIt){ 
            $("#skill_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#skill_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#skill_ttl").show();
            $("#skill_all").hide();
        }
    });
});

 //화면 사라지게 하는것(project)  
 $(document).ready(function(){

    var navHeight = 2200; 
    $("#project_all").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= navHeight ;

    if(rollIt){ 
            $("#project_ttl").fadeOut(1000);
            setTimeout(function(){
                $("#project_all").fadeIn(1000);
            },1000);
        }
        else{
            $("#project_ttl").show();
            $("#project_all").hide();
        }
    });
});




