const val = document.getElementById("number");
const btn = document.getElementById("start");
const stopE = document.getElementById("stop");
const reset = document.getElementById("reset")
const para = document.getElementById("count");
const middleP = document.getElementsByClassName("middle");

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
    const reset = document.createElement("button");
    const resetTNode = document.createTextNode("RESET");
    reset.appendChild(resetTNode)
    reset.classList.add("btn");
    middleP[0].appendChild(reset);

    reset.addEventListener("click",()=>{
        val.value= " ";
        // para.innerHTML = 0;
        val.style.display = "inline";
        reset.style.display = "none";
    })
    
})


