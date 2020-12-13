let cant_jump = 0;
let kiled = 0;

// animation of char walking on js load.
var main_char_moving = "main_char_moving 300ms infinite";
var target_char_moving = "target_char_moving 300ms infinite";
var start_serrated_slide = "serrated-slide 6s infinite, serrated-rotate 50ms infinite";

$( document ).ready(()=>{
    $("#main-char").css({
        "animation": `${main_char_moving}`
    });
    setTimeout(()=>{
    $("#serrated").css({
        "animation": `${start_serrated_slide}`
    });
    }, 3750);

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



// Char Target sensor forword to check if there any abyss. Then jump.
function target_sensorForJump(abyss_left_distance,target_char_jump_ones){

    var target_sensor_distanceLeftStart = parseInt($("#target_sensor_toJump").css("left"));
    var target_sensor_distanceLeftEnd = target_sensor_distanceLeftStart-100;

    if(abyss_left_distance <= target_sensor_distanceLeftStart &&
    abyss_left_distance >= target_sensor_distanceLeftEnd &&
    target_char_jump_ones === 0){
  
    $("#target-char").css({
        "animation": `target-char-jump 500ms`})
        target_char_jump_ones = 1;
        setTimeout(()=>{
    
            $("#target-char").css({
                "animation": `${target_char_moving}`})
                target_char_jump_ones = 0;
            }, 1000);
    


}
}

function endTheGame(lessThan,MoreThan,kiled){
     

    var endGame = setInterval (()=>{

        // Get css values.
        var abyss = $("#abyss");
        var main_char = $("#main-char");
        var mainChar_top_distance = parseInt(main_char.css("top"));
        var abyss_top_distance  = parseInt(abyss.css("top"));
        var abyss_left_distance  = parseInt(abyss.css("left"));
        var target_char_jump_ones = 0;
        
        target_sensorForJump(parseInt(abyss_left_distance),
        target_char_jump_ones)
        
        
            if( (abyss_left_distance < lessThan &&
                 abyss_left_distance > MoreThan  &&
                mainChar_top_distance === abyss_top_distance)|| kiled == 1){
                   
                    cant_jump =1;
                    main_char.css({"animation": `lose 500ms`});
                    $("#target-char").css({"animation": ``});
                    
                    abyss.css({ "left": `${abyss_left_distance}px` })
                    main_char.css({ "top": `100%` })
                    abyss.css("animation","none")
                    $("#ground").css("animation","none")
                    setTimeout(() =>{
                         alert("You Lose!!"); }, 1000
                         )
                
               clearInterval(endGame)
                }
        },0.0001);

   
    
    
   
}

// Check if characters droped in the abyss.End The Game.





endTheGame(20,0,0)





// main charater jumping on click (space-bar).
var main_char_jumpOnSpaceBar =

$("body").on('keypress', (evt) => {
    if (evt.which == 32 && cant_jump === 0) {
        $("#main-char").css({
            "animation": `main-char-jump 500ms`
        })
        setTimeout(()=>{

            $("#main-char").css({
                "animation": `${main_char_moving}`
            })
 
            
            }, 500);


    }
    
});


//main charater jumping on mouse click also.
// var main_char_jumpOnClick =

$("body").on('click', () => {

        if(cant_jump === 0){
            $("#main-char").css({ "animation": `main-char-jump 500ms` })
            setTimeout(()=>{
    
                $("#main-char").css({
                    "animation": `${main_char_moving}`})
     
                
                }, 500);
        }



});

var main_char_before_jump = parseInt($("#main-char").css("top"));

var endGame_by_serrated = setInterval (()=>{

var main_char_after_jump = parseInt($("#main-char").css("top"));
var main_left_distance = parseInt($("#main-char").css("left"));
var serrated = parseInt($("#serrated").css("left"));

if(main_left_distance > serrated && serrated > 0 &&
    main_char_before_jump === main_char_after_jump){


    $("#serrated").css({ "animation": "" })
    clearInterval(endGame_by_serrated)
    endTheGame(20,0,1) 

}


},0.0001);






















