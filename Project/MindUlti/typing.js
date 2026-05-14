let text="Booting MindVerse Ultimate AI...";
let i=0;

function boot(){
if(i<text.length){
document.getElementById("bootText").innerHTML+=text.charAt(i);
i++;
setTimeout(boot,50);
}
}

boot();