const slider_btn = document.getElementById("slider-btn");
const login_btn = document.getElementById("login-btn");
const signin_btn = document.getElementById("signin-btn");
const login_card = document.getElementsByClassName("login-card");
const signin_card = document.getElementsByClassName("signin-card");

var is_log = true;

login_btn.onclick = function(){moveTo_logIn()};
signin_btn.onclick = function(){moveTo_signIn()};
signin_card[0].style.transform = "rotatey(90deg)";


function moveTo_logIn(){
    if(!is_log){
        slider_btn.style.left = "0";
        slider_btn.style.rotate = "-20deg";

        // login_card[0].style.display = "flex";
        login_card[0].style.transform = "rotatey(0deg)";
        // signin_card[0].style.display = "none";
        signin_card[0].style.transform = "rotatey(90deg)";

        console.log("do_works");
        is_log = true;
    }
    else return 0;
}

function moveTo_signIn(){
    if(is_log){
        slider_btn.style.left = "30px";
        slider_btn.style.rotate = "390deg";

        // login_card[0].style.display = "none";
        login_card[0].style.transform = "rotatey(-90deg)";
        // signin_card[0].style.display = "flex";
        signin_card[0].style.transform = "rotatey(0deg)";


        console.log("works");
        is_log = false;
    }
    else return 0;
}

