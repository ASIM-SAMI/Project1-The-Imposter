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


if( abyss_left_distance < 9 && abyss_left_distance > 0  &&
    mainChar_top_distance === abyss_top_distance){

       main_char.addClass("lose");
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




// function jump() {
$("body").on('keypress', (evt) => {
    if (evt.which == 32) {

        $("#main-char").addClass("jump");
        setTimeout(()=>{

            $("#main-char").removeClass("jump");
 
            
            }, 1600);


            

       
    }
});































