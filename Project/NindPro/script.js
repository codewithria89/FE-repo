// ENTER SYSTEM
function enterSystem(){
document.querySelector(".login-screen").style.display="none";
document.getElementById("system").style.display="block";
}

// Reveal Text
function reveal(id){
document.getElementById(id).style.display="block";
}

// Secret Mode
function easterEgg(){
document.getElementById("secret")
.innerText="🔥 GOD MODE ACTIVATED 🔥";
document.body.style.background="#111";
}

// MATRIX EFFECT
const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const letters="01";
const fontSize=16;
const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++)
drops[x]=1;

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0f0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters.charAt(Math.floor(Math.random()*letters.length));
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}

setInterval(draw,33);