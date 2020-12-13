let cant_jump = 0;

// animation of char walking.
var main_char_moving = "main_char_moving 300ms infinite";
var target_char_moving = "target_char_moving 300ms infinite";
$( document ).ready(()=>{
    $("#main-char").css({
        "animation": `${main_char_moving}`
    });

    $("#target-char").css({
        "animation": `${target_char_moving}`
    });
})



// var abyss_size = 0;
// // Random width of element hole.
// var abyss_size = setInterval (()=>{
//     var abyssRandom = Math.random() * (20 - 8) + 8;
//     $("#abyss").css({ "width": `${20}%` })
//     abyss_size = $("#abyss").css("width");
    
// } , 5000);


function CheckIfCharFaling(lessThan,MoreThan){

// Check if characters droped in the abyss.End The Game.
var endGame = setInterval (()=>{

// Get css values.
var abyss = $("#abyss");
var main_char = $("#main-char");
var mainChar_top_distance = parseInt(main_char.css("top"));
var abyss_top_distance  = parseInt(abyss.css("top"));
var abyss_left_distance  = parseInt(abyss.css("left"));
var target_char_jump_ones = 0;
if(abyss_left_distance < 150 && target_char_jump_ones === 0){
  
        $("#target-char").css({
            "animation": `target-char-jump 1000ms`})
            target_char_jump_ones = 1;
            setTimeout(()=>{
        
                $("#target-char").css({
                    "animation": `${target_char_moving}`})
                    target_char_jump_ones = 0;
                }, 1000);
        
    
    
}


if( abyss_left_distance < lessThan && abyss_left_distance > MoreThan  &&
    mainChar_top_distance === abyss_top_distance){
       
       cant_jump =1;
       main_char.css({"animation": `lose 500ms`});
       $("#target-char").css({"animation": ``});
       clearInterval(endGame)

       abyss.css({ "left": `${abyss_left_distance}px` })
       main_char.css({ "top": `100%` })
       abyss.css("animation","none")
       $("#ground").css("animation","none")
       setTimeout(() =>{
            alert("You Lose!!"); }, 1000
            )


 }
},0.0001);
}


    CheckIfCharFaling(20,0)





// main charater jumping on click (space-bar).
var main_char_jumpOnSpaceBar =

$("body").on('keypress', (evt) => {
    if (evt.which == 32 && cant_jump === 0) {
        $("#main-char").css({
            "animation": `main-char-jump 1600ms`
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
            $("#main-char").css({ "animation": `main-char-jump 1600ms` })
            setTimeout(()=>{
    
                $("#main-char").css({
                    "animation": `${main_char_moving}`})
     
                
                }, 1600);
        }



});




          























