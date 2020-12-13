let cant_jump = 0;

// animation of char walking.
var main_char_moving = "main_char_moving 300ms infinite";
$( document ).ready(()=>{
    $("#main-char").css({
        "animation": `${main_char_moving}`
    });

    $("#target-char").css({
        "animation": `target_char_moving 300ms infinite`
    });
})



var abyss_size = 0;
// Random width of element hole.
// var abyss_size = setInterval (()=>{
//     var abyssRandom = Math.random() * (20 - 8) + 8;
//     $("#abyss").css({ "width": `${abyssRandom}%` })
//     abyss_size = $("#abyss").css("width");
//     console.log(abyss_size)
    
// } , 5000);


// Check if characters droped in the abyss.End The Game.
var endGame = setInterval (()=>{

// Get css values.
var abyss = $("#abyss");
var main_char = $("#main-char");
var mainChar_top_distance = parseInt(main_char.css("top"));
var abyss_top_distance  = parseInt(abyss.css("top"));
var abyss_left_distance  = parseInt(abyss.css("left"));


if( abyss_left_distance < 20 && abyss_left_distance > 0  &&
    mainChar_top_distance === abyss_top_distance){
       
       cant_jump =1;
       main_char.css({"animation": `lose 500ms`});
       clearInterval(endGame)

       abyss.css({ "left": `${abyss_left_distance}px` })
       main_char.css({ "top": `100%` })
       abyss.css("animation","none")
       $("#ground").css("animation","none")
       setTimeout(() =>{
            alert("You Lose!!"); }, 1000
            );

}

},1);




// main charater jumping on click (space-bar).
var main_char_jumpOnSpaceBar =

$("body").on('keypress', (evt) => {
    if (evt.which == 32 && cant_jump === 0) {
        $("#main-char").css({
            "animation": `jump 1600ms`
        })
        setTimeout(()=>{

            $("#main-char").css({
                "animation": `${main_char_moving}`
            })
 
            
            }, 1600);


    }
    
});


//main charater jumping on mouse click also.
var main_char_jumpOnClick =

$("body").on('click', () => {

        if(cant_jump === 0){
            $("#main-char").css({ "animation": `jump 1600ms` })
            setTimeout(()=>{
    
                $("#main-char").css({
                    "animation": `${main_char_moving}`})
     
                
                }, 1600);
        }



});







          

     
// setInterval(()=>{
    
//     $("#target-char").addClass("jump");
//     setTimeout(()=>{
       
//      $("#target-char").removeClass("jump"); 
  
// },1600);
// },1600);





























