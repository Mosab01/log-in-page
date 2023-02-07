const slider_btn = document.getElementById("slider-btn");
const login_btn = document.getElementById("login-btn");
const signin_btn = document.getElementById("signin-btn");
const login_card = document.getElementsByClassName("login-card");
const signin_card = document.getElementsByClassName("signin-card");
const full_name = document.getElementById("full-name");
const full_name_input = document.getElementById("full-name-input");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit_btn = document.getElementById("submit");
const forgot_pass = document.getElementById("forgot-pass");
const header = document.getElementById("header");

var is_log = false;

if(!is_log){
    show_login();
}

login_btn.onclick = function(){moveTo_logIn()};
signin_btn.onclick = function(){moveTo_signIn()};

function show_login(){
    slider_btn.style.left = "0";
    slider_btn.style.rotate = "-20deg";
    header.innerHTML = "Log In";
    signin_card[0].style.transform = "rotatey(180deg)";
    header.style.transform = "rotatey(180deg)";
    forgot_pass.style.display = "inline";
    forgot_pass.style.transform = "rotatey(180deg)";
    password.style.transform = "rotatey(180deg)";
    email.style.transform = "rotatey(180deg)";
    submit_btn.style.transform = "rotatey(180deg)";
    full_name_input.style.width = "0";
    full_name_input.style.height = "0";
    full_name.style.width = "0";
    full_name.style.height = "0";
    full_name_input.style.padding = "0";
    full_name.style.margin = "0";

    console.log("do_works");
    is_log = true;
}

function show_signin(){
    slider_btn.style.left = "30px";
    slider_btn.style.rotate = "390deg";
    header.innerHTML = "Sign In";
    signin_card[0].style.transform = "rotatey(0deg)";
    header.style.transform = "rotatey(0deg)";
    forgot_pass.style.display = "none";
    password.style.transform = "rotatey(0deg)";
    email.style.transform = "rotatey(0deg)";
    submit_btn.style.transform = "rotatey(0deg)";
    full_name_input.style.width = "100%";
    full_name_input.style.height = "100%";
    full_name.style.width = "80%";
    full_name.style.height = "10%";
    full_name_input.style.paddingLeft = "20px";
    full_name.style.marginBottom = "20px";

    console.log("works");
    is_log = false;
}

function moveTo_logIn(){
    if(!is_log){
        show_login();
    }
}

function moveTo_signIn(){
    if(is_log){
        show_signin();
    }
}

