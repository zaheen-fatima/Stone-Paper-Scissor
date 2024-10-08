let userScore = 0;
let compScore = 0;

let theme = document.querySelector(".toggle");
let body = document.querySelector("body");
let userScoreMsg = document.querySelector(".score");
let compScoreMsg = document.querySelector(".compScore");

let buttons = document.querySelectorAll(".button");
let res = document.querySelector(".res");
let newGame = document.querySelector(".newGame");

const drawGame=()=>{
    console.log("Game was draw");
    res.innerText = "It's a draw, try again!";
    res.style.backgroundColor = "yellow";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreMsg.innerText=`Your Score: ${userScore}`;
        console.log(`Congratulations`);
        res.innerText = `Congratulations, Your ${userChoice} beats ${compChoice}`;
        res.style.backgroundColor = "#90EE90";
    }else{
        compScore++;
        compScoreMsg.innerText=`Computer's Score: ${compScore}`;
        console.log("Oops, You lose the game!")
        res.innerText =`Oops, ${compChoice} beats Your ${userChoice}!`;
        res.style.backgroundColor = "#ff6600";
    }
}

const genCompChoice=()=>{
    const option = ["Rock","Paper","Scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}
const playGame=(userChoice)=>{
    console.log("User Choice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "Rock"){
            userWin = compChoice==="Paper" ? false : true;
        }
        else if (userChoice === "Paper"){
            userWin = compChoice==="Scissor" ? false : true;
        }
        else if (userChoice === "Scissor"){
            userWin = compChoice==="Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}
buttons.forEach((button)=>{button.addEventListener("click", ()=>{
    const userChoice = button.getAttribute("id");
    playGame(userChoice);
})})

const reset = () => {
    userScore = 0;
    compScore = 0;
    userScoreMsg.innerText = "Your Score: 0";
    compScoreMsg.innerText = "Computer's Score: 0";
    res.innerText = "Choose your move..";
    res.style.backgroundColor = ""; 
}
newGame.addEventListener("click", ()=>{reset()});


const themebtn = () => {
    
    if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        theme.innerText = "Light Theme";
        newGame.style.backgroundColor="white";
        newGame.style.borderColor = "yellow";
        newGame.style.color = "black";
        res.style.borderColor = "white";
        res.style.color = "black";
        theme.style.backgroundColor = "white";
        theme.style.color = "black";
        
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        theme.innerText = "Dark Theme";
        
    }
}
theme.addEventListener("click",themebtn)
