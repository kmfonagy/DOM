var p1btn = document.getElementById("p1");
var p2btn = document.querySelector("#p2");
var rst = document.getElementById("rst");
var p1n = document.querySelector("#p1n");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1s = 0;
var p2s = 0;
var gameOver = false;
var ws = 5;

p1btn.addEventListener("click", function(){
    if(!gameOver){
        p1s++;}
        if(p1s === ws){
            p1n.classList.add("winner");
            gameOver = true;
        }
    p1n.textContent = p1s;
});

p2btn.addEventListener("click", function(){
    if(!gameOver){
        p2s++;}
        if(p2s === ws){
            p2n.classList.add("winner");
            gameOver = true;
        }
    p2n.textContent = p2s;
});

rst.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    ws = Number(numInput.value);
    reset();
});

function reset(){
    p1s = 0;
    p2s = 0;
    p1n.textContent = 0;
    p2n.textContent = 0;
    p2n.classList.remove("winner");
    p1n.classList.remove("winner");
    gameOver = false;
}