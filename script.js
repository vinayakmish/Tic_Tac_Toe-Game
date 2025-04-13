let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset_button");
let newGame=document.querySelector("#new_Button");
let msgContainer = document.querySelector(".msgcontainer");
let Winner=document.querySelector("#msg");
let changeMode=document.querySelector("#mode");
let turn =true;

let mode = "light";
    changeMode.addEventListener("click",()=>{
    if (mode==="light"){
        mode="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light")
    }else{
        mode="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");

    }});
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",  ()=>{
    if(turn){
        box.innerText="O";
        turn = false;
    }else{
        box.innerText="X"
        turn=true;
    }
    box.disabled=true;
    checkWinner();
})
});


const resetGame =()=>{
    turn=true;
    enableGame();
    msgContainer.classList.add("hide");
    
};


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const showWinner = (winner) =>{
    Winner.innerText=`Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const enableGame =()=>{
    turn=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);