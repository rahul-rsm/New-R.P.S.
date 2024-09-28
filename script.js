const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector('#your-score')
const compScorePara = document.querySelector('#comp-score')

let userScore = 0;
let compScore = 0;

const drawGame = () => {
    // console.log('Game is draw')
    msg.innerText = 'Game was draw. please restart'
    msg.style.backgroundColor = "#023047"
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!!")
        msg.innerText = `you win!!. your ${userChoice} beats computer's ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lost!!!")
        msg.innerText = `you lost!!!. computer's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"]
  let randomIdx = Math.floor(Math.random() * 3)
  return options[randomIdx]
}

const playGame = (userChoice) =>{
//    console.log("userChoice is", userChoice)
   const compChoice = genCompChoice()
//    console.log('compChoice is', compChoice)
   if(userChoice === compChoice){
     drawGame()
   } else {
    let userWin = true;
    if(userChoice === "rock"){
        //paper, scissor
     userWin =  compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        // rock , sicssor
     userWin =   compChoice === "scissor" ? false : true;
    } else {
        //rock , paper
     userWin =   compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice)
   }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})