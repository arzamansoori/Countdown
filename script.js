const val = document.getElementById("number");
const btn = document.getElementById("start");
const stopE = document.getElementById("stop");
const reset = document.getElementById("reset")
const para = document.getElementById("count");
let para1;
let help;

//taking value from user
function setCount(){
    if(val.value >= 0){
        para.innerHTML = val.value;
        para.innerHTML = val.value--;
    }
}

//starting interval
function startCount(){
     help = setInterval(setCount, 1000)
}

//start button
btn.addEventListener("click", () => {
    val.style.display = "none";
    startCount();
})

//stop button
stopE.addEventListener("click", ()=>{
    clearInterval(help);
})

//reset button
reset.addEventListener("click",()=>{
    val.value= 0;
    para.innerHTML = 0;
    clearInterval(help);
    val.style.display = "inline";
})

