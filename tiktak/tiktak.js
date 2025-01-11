console.log("Welcome to tictactoe")

let music = new Audio("New folder/game.wav");
let ton = new Audio("New folder/ting.mp3");
let gameOver = new Audio("New folder/gameOver.wav")
let turn = "X";
let isGameOver = false;


// funtion to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// function to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ]
    wins.forEach(e=>{
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && 
        (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && 
        (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText +  " Won";
            isGameOver = true;
            document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "250px";
        }
    })
}

// Game logic 
let boxs = document.getElementsByClassName("box");
Array.from(boxs).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            ton.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});


// Add onclick listener to reset button
reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerText = " "
    })
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "0px";
    
})