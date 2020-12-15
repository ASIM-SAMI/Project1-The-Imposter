var cant_jump = 0;
var kiled = 0;
var double_jump =0;
var total_stars = 0;
var damage = 0;
var target_hp = 5;
var item1 = 0;

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

function targetDamage(target_left_distance,target_top_distance,
    item1_left_distance,item1_top_distance,continer_size){

        if(target_left_distance === item1_left_distance &&
            target_top_distance <= item1_top_distance &&
            80 > ((item1_top_distance/continer_size)*100) ){
        
                $("#target-char").css("left",`${target_left_distance-100}px`);
                $("#target-point5").css("display",`none`);
                damage = 1;
                target_hp -= 1;
                console.log(target_hp)
                setTimeout(() =>{

                    $("#wooden-box").css("left",`${target_left_distance-100}px`);
                    $("#wooden-box").css("display",`none`);

                    
                    

                },600)


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
                 abyss_left_distance > MoreThan &&
                mainChar_top_distance === abyss_top_distance)|| kiled == 1){
                   
                    cant_jump =1;
                    main_char.css({"animation": `lose 500ms`});
                    $("#target-char").css({"animation": ``});
                    
                    abyss.css({ "left": `${abyss_left_distance}px` })
                    main_char.css({ "top": `100%` })
                    abyss.css("animation","none")
                    $("#ground").css("animation","none")
                    $(".dead").css("display","none")

                        
                           
                        
                        
                        
                
                    setTimeout(() =>{
                         alert("You Lose!!"); }, 1000
                         )
                
               clearInterval(endGame)
                }
               var continer_size = parseInt($(".contanier").css("height"));
               var main_char_after_jump = parseInt($("#main-char").css("top"));
               var main_left_distance = parseInt($("#main-char").css("left"));
               var target_left_distance = parseInt($("#target-char").css("left"));
               var target_top_distance = parseInt($("#target-char").css("top"));
               var star1_left_distance = parseInt($("#star").css("left"));
               var star1_top_distance = parseInt($("#star").css("top"));
               var star2_left_distance = parseInt($("#star2").css("left"));
               var star2_top_distance = parseInt($("#star2").css("top"));
               var star3_left_distance = parseInt($("#star3").css("left"));
               var star3_top_distance = parseInt($("#star3").css("top"));
               var item1_left_distance = parseInt($("#wooden-box").css("left"));
               var item1_top_distance = parseInt($("#wooden-box").css("top"));
               
               if(item1 === 1){
               targetDamage(target_left_distance,target_top_distance,
                item1_left_distance,item1_top_distance,continer_size)
               }

               collectStars(1,main_char_after_jump,main_left_distance
                ,star1_left_distance,star1_top_distance)

                collectStars(2,main_char_after_jump,main_left_distance
                    ,star2_left_distance,star2_top_distance)

                collectStars(3,main_char_after_jump,main_left_distance
                        ,star3_left_distance,star3_top_distance)
                
                        totalStars()
                       
               },0.0001);

   
    
    
   
}

function collectStars(star,main_char_after_jump,main_left_distance,
    star_left_distance,star_top_distance){
    if(((main_left_distance+100) > star_left_distance) &&
    star_left_distance > 0 && 
    star_top_distance === main_char_after_jump){

               
                    switch(star){

                        case 1: $("#star").css("display","none");
                        total_stars += 1;
                        reUseStars("star",3000)
                        break;
                        case 2: $("#star2").css("display","none");
                        total_stars += 1;
                        reUseStars("star1",10000)
                        break;
                        case 3: $("#star3").css("display","none");
                        total_stars += 1;
                        reUseStars("star3",15000)
                        break;
                        default: console.log("Error")
                    }
                    


               }
}



// Check if characters droped in the abyss.End The Game.

function reUseStars(star,timeOfAnimation){
    setTimeout(() =>{
        
        $(`#${star}`).css("display","");

    }, timeOfAnimation)
}

function totalStars(){
    $("#num-stars").text(total_stars);
}

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

$(".contanier").on('click', () => {


if(cant_jump === 0){
           if(double_jump > 0){
            cant_jump = 1;
            $("#main-char").css({ "animation": `` })
            $("#main-char").css({ "animation": `main-char-double-jump 800ms` })
            setTimeout(()=>{
    
                $("#main-char").css({
                    "animation": `${main_char_moving}`})
                    double_jump = 0;
                    cant_jump = 0;

                }, 800);
           }else{
            $("#main-char").css({ "animation": `main-char-jump 500ms` })
            double_jump += 1;
            cant_jump = 1;
            setTimeout(()=>{
    
                $("#main-char").css({
                    "animation": `${main_char_moving}`})
                    cant_jump = 0;
                }, 500);

                setTimeout(()=>{
                    double_jump = 0;
                    console.log("double out")
                }, 1000);
           }



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



$("#item1").on('click', () => {
    

        item1 += 1;
        $("#wooden-box").css({
            'animation': 'wooden-box-drop 3s'
        })
    

    
    })

$("#item2").on('click', () => {

        console.log("item2")
        
})

$("#item3").on('click', () => {

    console.log("item3")
    
    })






















