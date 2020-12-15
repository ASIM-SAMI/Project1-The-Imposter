var p_stage = 0;
var p_before = "";
var main_p = $("#how-to-play").text();


if(p_stage === 0){
        
    $("#back-button").css("display","none")
}


$("#next-button").on("click",()=>{
    
    p_stage += 1;
    pExpHowTPStage()
    console.log(p_stage)
    if(p_stage === 1){
        
        $("#back-button").css("display","")
        
    }
    if(p_stage === 2){
        
        $("#next-button").css("display","none")
    }
})

function pExplainHowTP(nextP, nextImg ){


    $("#how-to-play").text("")
    $("#how-to-play").append(nextP)
    $("#imges").css("background-image",nextImg)

}

function pExpHowTPStage(){
    switch(p_stage){
        case 0:
            pExplainHowTP("How To play:<br><br>One left click on the mouse to jump. after 0.5s click again for double jump.<br><br>",
            'url("../img/img-ex-click-jump.jpg")')
            break;
        case 1:
         pExplainHowTP("How To play:<br><br>Collect The stars to buy itemes and use it to damage the Imposter!.<br><br>",
         'url("../img/img-ex-click-stars-itemes.jpg")')
         break;
         
         case 2: 
         pExplainHowTP("How To play:<br><br>These items You can buy it by stars to damage the Imposter to catch him!!",
         'url("../img/img-ex-item-damage.jpg")')
         break;



         default: "Error"
     }
     
}

$("#back-button").on("click",()=>{
    if(p_stage !== 0){

    p_stage -= 1;
    pExpHowTPStage()
    $("#next-button").css("display","")
    if(p_stage === 0){
        
        $("#back-button").css("display","none")
    }
    }
})  



$("#start").on("click",(evt)=>{
    window.location = 'index.html';
})