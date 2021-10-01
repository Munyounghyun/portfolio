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