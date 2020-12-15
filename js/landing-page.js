var next = 0;
var p_before = "";
$("#next-button").on("click",()=>{
  

switch(next){
   case 0:
    pExplainHowTP("How To play:<br><br> Collect The stars to buy itemes and use it to damage the Imposter!.<br><br>",
    'url("../img/img-ex-click-stars-itemes.jpg")')
    break;
    
    case 1: 
    pExplainHowTP("These items You can buy it by stars to damage the Imposter to catch him!!",
    'url("../img/img-ex-item-damage.jpg")')
}

next += 1;
})

function pExplainHowTP(nextP, nextImg ){

    p_before = $("#how-to-play").text()
    $("#how-to-play").text("")
    $("#how-to-play").append(nextP)
    $("#imges").css("background-image",nextImg)

}