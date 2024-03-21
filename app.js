let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=() =>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO) {
        box.innerText="O";
        turnO = false;
      }
    else{
        box.innerText="X";
        turnO = true;
    } 
    box.disabled = "true";
    count++;
    checkWinner();
});
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = "true";
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled= "false";
       box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText=`Congratulations,winner is ${winner}`;
    message.classList.remove("hide");
    disableboxes();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let poss1=boxes[pattern[0]].innerText;
        let poss2=boxes[pattern[1]].innerText;
        let poss3=boxes[pattern[2]].innerText;
        if(poss1!=""&&poss2!=""&&poss3!=""){
            if(poss1===poss2&&poss2===poss3){
             showWinner(poss1);
            }
        }
    }
} 
newGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);