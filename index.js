var menubtn=document.getElementById("menubtn");

var sidenavigation= document.getElementById("sidenavigation");
var menu =document.getElementById("menu");
menubtn.onclick=function(){
    if (sidenavigation.style.right=="-250px") {
    sidenavigation.style.right= "0";}
    else{
        sidenavigation.style.right="-250px";

    }
}

