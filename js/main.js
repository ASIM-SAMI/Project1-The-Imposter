var cant_jump = 0;
var kiled = 0;
var double_jump =0;
var total_stars = 0;
var damage = 0;
var target_hp = 5;
var item1 = 0;
var item2 = 0;
var item3 = 0;
var cant_click_item_yet = 0;

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

function targetDamage(item,target_left_distance,target_top_distance,
    item_left_distance,item_top_distance,continer_size,target_sensor_left_d){

        if(target_left_distance === item_left_distance &&
            target_top_distance <= item_top_distance &&
            80 > ((item_top_distance/continer_size)*100) ){
        
                
                
                var left_d = 0;
                var left_d_presentage = parseInt(((target_left_distance/continer_size)*100))
                if(item === 1){
                    target_hp -= 1;
                    left_d = 16;
                    left_both = left_d_presentage - left_d;
                    console.log(continer_size)
                    $("#target-char").css("left",`${left_both}%`);
                    $(".contanier").css("animation","target_damage 20ms")
                }
                if(item === 2){
                    target_hp -= 3;
                    left_d = 43;
                    left_both = left_d_presentage - left_d;

                    $("#target-char").css("left",`${left_both}%`);
                    $(".contanier").css("animation","target_damage 20ms")
                }


                    
                if(target_hp < 0){
                    target_hp = 0;
                }

                switch(target_hp){

                    case 4: $("#target-point5").css("display",`none`);
                    break;

                    case 3: $("#target-point4").css("display",`none`);
                    $("#target-point5").css("display",`none`);
                    break;

                    case 2: $("#target-point3").css("display",`none`);
                    $("#target-point4").css("display",`none`);
                    $("#target-point5").css("display",`none`);
                    
                    break;

                    case 1: $("#target-point2").css("display",`none`);
                    $("#target-point4").css("display",`none`);
                    $("#target-point3").css("display",`none`);
                    $("#target-point5").css("display",`none`);
                    
                    break;

                    case 0:$(`#target-point`).css("display",`none`);
                    $("#target-point5").css("display",`none`);
                    $("#target-point4").css("display",`none`);
                    $("#target-point3").css("display",`none`);
                    $("#target-point2").css("display",`none`);
                    
                    break;
                    default: "Error"
                }

                setTimeout(() =>{
                    
                    $("#wooden-box").css('animation','none')
                    $("#wooden-box").css("left",`${left_both}%`);

                    $("#bar-drop").css('animation','none')
                    $("#bar-drop").css("left",`${left_both}%`)


                    item1 =0;
                    item2 =0;
                    item3 =0;
                    left_d = 0;
                    cant_click_item_yet=0;
                    $(".contanier").css("animation","")
                    

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
        var left_d_main_char = parseInt(main_char.css("left"))
        var left_d_target_char = parseInt($("#target-char").css("left"))

        if(left_d_main_char >= left_d_target_char){

            cant_jump =1;
            main_char.css({"animation": ``});
            $("#target-char").css({"animation": ``});
            
            abyss.css("animation","none")
            $("#ground").css("animation","none")
            $(".dead").css("display","none")

                
                   
                
                
                
        
            setTimeout(() =>{
                 alert("You Win!!"); }, 1000
                 )
        
       clearInterval(endGame)

        }
        
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
               var target_sensor_left_d = parseInt($("#target_sensor_toJump").css("left"));
               var continer_size = parseInt($(".contanier").css("width"));
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
               var item2_left_distance = parseInt($("#bar-drop").css("left"));
               var item2_top_distance = parseInt($("#bar-drop").css("top"));
               
               if(item1 === 1){
               targetDamage(1,target_left_distance,target_top_distance,
                item1_left_distance,item1_top_distance,continer_size,target_sensor_left_d)
               }

               if(item2 === 1){
                targetDamage(2,target_left_distance,target_top_distance,
                    item2_left_distance,item2_top_distance,continer_size,target_sensor_left_d)
                }

                if(item3 === 1){
                    targetDamage(3,target_left_distance,target_top_distance,
                     item1_left_distance,item1_top_distance,continer_size,target_sensor_left_d)
                    }

               collectStars(1,main_char_after_jump,main_left_distance
                ,star1_left_distance,star1_top_distance,)

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
                        reUseStars("star2",10000)
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

    
    
      if(total_stars >= 3 && cant_click_item_yet === 0){

        cant_click_item_yet = 1;

        item1 += 1;
        $("#wooden-box").css({
            'animation': 'wooden-box-drop 3s'
        })
        total_stars -= 3;
      }
        
    

    
    })

$("#item2").on('click', () => {

    

    if(total_stars >= 8  && cant_click_item_yet === 0){

        cant_click_item_yet = 1;

        item2 += 1;
        $("#bar-drop").css({
            'animation': 'bar-drop 3s'
        })
        total_stars -= 8;
      }
        
    
        
})

$("#item3").on('click', () => {

    

    if(total_stars >= 5){

    var choise = parseInt(Math.random() * (4 - 1) + 1);
    
    if((choise === 1 || choise === 2)  && cant_click_item_yet === 0){

        cant_click_item_yet = 1;

        item1 += 1;
        $("#wooden-box").css({
            'animation': 'wooden-box-drop 3s'
        })
        

    }else if(cant_click_item_yet === 0){

        cant_click_item_yet = 1;

        item2 += 1;
        $("#bar-drop").css({
            'animation': 'bar-drop 3s'
        })

    }
    total_stars -= 5;
}
    
    })






















