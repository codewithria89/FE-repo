function sendMsg(){

let input=document.getElementById("userInput");
let chat=document.getElementById("chat");

let user=input.value.toLowerCase();

chat.innerHTML += "<p>👤 "+input.value+"</p>";

let reply="I am still learning from you 🤖";

// Greetings
if(user.includes("hello") || user.includes("hi"))
reply="Hello Developer 👋 Welcome to MindVerse.";

else if(user.includes("how are you"))
reply="I am operating at 100% efficiency ⚡";

// Name question
else if(user.includes("my name"))
reply="You are the creator of MindVerse 😎";

else if(user.includes("who am i"))
reply="You are a future software engineer 🚀";

// Learning question
else if(user.includes("learning"))
reply="I am learning creativity and innovation from you.";

else if(user.includes("project"))
reply="Your project looks like a futuristic AI system 🔥";

else if(user.includes("bye"))
reply="Goodbye Developer. See you again 👋";

// Show reply
chat.innerHTML += "<p>🤖 "+reply+"</p>";

input.value="";
chat.scrollTop=chat.scrollHeight;
}