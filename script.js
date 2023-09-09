var timer=60;
var score=0;
let hitRandom=0;

function makeBubble(){
    var clutter="";
for(let i=1;i<=168;i++){
  let random=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`;
}
 document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
  let id=setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerValue").textContent=timer;
    }else{
        clearInterval(id);
        document.querySelector("#pbtm").innerHTML=`<h1 style="color: red;">Game Over Your Score is : ${score}</h1>`;

    }
    
  },1000)
}

function getNewhit(){
 hitRandom = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitRandom;
}

function  increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}


runTimer();
makeBubble();
getNewhit();

document.querySelector("#pbtm").addEventListener("click",(e)=> {
let clickno=(Number(e.target.textContent));
if(clickno === hitRandom){
    increaseScore();
    getNewhit();
}
});