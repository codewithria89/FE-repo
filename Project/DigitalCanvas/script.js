// script.js

// Loader
window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
});

// Typing Effect
new Typed(".typing",{
  strings:[
    "Machine Learning Enthusiast",
    "Java Developer",
    "Problem Solver",
    "Future Software Engineer"
  ],
  typeSpeed:80,
  backSpeed:50,
  loop:true
});

// AOS
AOS.init({
  duration:1200,
  once:true
});

// Particles
particlesJS("particles-js",{
  particles:{
    number:{value:80},
    color:{value:"#8b5cf6"},
    shape:{type:"circle"},
    opacity:{value:0.5},
    size:{value:3},
    line_linked:{
      enable:true,
      distance:150,
      color:"#8b5cf6",
      opacity:0.4,
      width:1
    },
    move:{
      enable:true,
      speed:2
    }
  }
});

// Cursor Glow
const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

// Back To Top
const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{
  if(window.scrollY>300){
    backToTop.style.display="block";
  }else{
    backToTop.style.display="none";
  }
});

backToTop.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// Dark Light Mode
const themeToggle=document.getElementById("theme-toggle");

themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");
});