function enterWorld(){
document.querySelector(".intro").style.display="none";
document.getElementById("world").style.display="block";
}

function showMessage(card){
let msg = card.querySelector(".message");
msg.style.display="block";
}

function changeMood(){
let colors=["black","#1a0033","#002b36","#2c003e"];
document.body.style.background=
colors[Math.floor(Math.random()*colors.length)];
}

function unlockSecret(){
document.getElementById("secret")
.innerText="🔥 Secret Unlocked: You are a Future Developer!";
}