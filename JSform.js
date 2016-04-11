/**
 * Created by mac on 16/4/8.
 */
    window.onload = function(){
        var e = document.getElementById("formNameBox");
        e.onblur = function () {
            if(e.value=="") {
                e.style.borderColor = "red";
            }
        };
        e.onkeydown = function(){
            e.style.borderColor = "aliceblue";
        }
        var a = document.getElementById("radioBtnDot");




    }

function makeGrey(){
    var n = document.getElementById("formNumberBox");
    var c = document.getElementById("formNumberLabel");
    c.style.color = "#DCDCDC";


    n.disabled = "true";


}
function makeGreyOut(){
    var n = document.getElementById("formNumberBox");

    var c = document.getElementById("formNumberLabel");
    c.style.color = "black";
    n.disabled = false;
}

