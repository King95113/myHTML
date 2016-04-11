/**
 * Created by mac on 16/4/8.
 */
function changeColor(){
    var p1 = document.getElementById("paragraph_1");
    var p2 = document.getElementById("paragraph_2");
    p1.style.color = "green";
    p2.style.color = "green";
}
function showDetail(){
    var p1 = document.getElementById("paragraph_1");
    alert(p1.innerHTML);
    alert(p1.classList);
}
function createNewJ(){
    var e = document.createElement("h4")
    var txt = document.createTextNode(" Can we have our teacher back");
    e.appendChild(txt);
    var para = document.getElementById("paragraph");
    para.appendChild(e);
    var p = document.createElement("p");
    var ptxt = document.createTextNode("Once a superintendent of schools was visiting a three-room school. One room was very noisy, so the man grabbed a tall boy who had been standing up talking. He took the boy into another room and stood him in the corner. Five minutes later, a smalll boy came out of the first room and said, 'When can we have our teacher back?'");
    p.appendChild(ptxt);
    para.appendChild(p);
}

function changeBckg(){
    var b = document.getElementById("paragraph");
    var i = Math.random();
    if(i >= 0 && i < 0.3){
        b.style.background = 'url("backgroundpic.png")';
    }
    else if(i >= 0.3 && i<0.6){
        b.style.background = 'url("bluesky.png")';
    }
    else if(i >= 0.6 && i<=1){
        b.style.background = 'url("greenworld.png")';
    }

}

