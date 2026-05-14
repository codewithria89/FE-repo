// Loading percentage
let load=0;
let loader=setInterval(()=>{
load++;
document.getElementById("loading").innerText=
"Loading "+load+"%";

if(load==100){
clearInterval(loader);
document.getElementById("boot").style.display="none";
document.getElementById("login").style.display="block";
}
},40);

// LOGIN SYSTEM
function login(){
let pass=document.getElementById("pass").value;

if(pass==="mindverse"){
document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";
}else{
document.getElementById("loginMsg").innerText="Access Denied";
}
}

// CARD ACTION
function activate(card){
card.innerText="Activated ✅";
}

// SECRET MODE
function secret(){
document.body.style.background="#111";
document.getElementById("secretText")
.innerText="🔥 ULTIMATE DEVELOPER MODE ENABLED 🔥";
}