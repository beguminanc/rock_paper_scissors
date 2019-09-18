let score = 0;
let max_count = 5;
let play_count = 0;
function computerPlay()
{
    let options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        return "Computer also selected your element!";
    }   
    if (playerSelection.toLowerCase() === "rock")
    {
        if (computerSelection.toLowerCase() === "scissors")
        {
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection.toLowerCase() === "paper")
        {
            return "You lose! Paper beats Rock";
        }
    }
    else if (playerSelection.toLowerCase() === "paper")
    {
        if (computerSelection.toLowerCase() === "scissors")
        {
            return "You lose! Scissors beats Paper";
        }
        else if (computerSelection.toLowerCase() === "rock")
        {
            return "You Win! Paper beats Rock";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors")
    {
        if (computerSelection.toLowerCase() === "paper")
        {
            return "You win! Scissors beats Paper";
        }
        else if (computerSelection.toLowerCase() === "rock")
        {
            return "You lose! Rock beats Scissors";
        }
    }
}

function game(playerSelection)
{
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.substring(0,4).toLowerCase() === "comp")
    {
        max_count++;
    }
    if (result.substring(0,7).toLowerCase() === "you win")
    {
        score++;
    }
    var para = document.createElement("p");
    var node = document.createTextNode(result);
    para.appendChild(node);
    let scoresDiv = document.getElementById("scores");
    scoresDiv.appendChild(para);
}

window.onload=function(){
    {
        let newgame = document.getElementById("newgame");

        function checkResult()
        {
            play_count++;
            if (play_count == max_count)
            {
                if(score > 2)
                {
                    var para = document.createElement("h4");
                    var node = document.createTextNode("You are the winner!");
                    para.appendChild(node);
                    let resultDiv = document.getElementById("result");
                    resultDiv.appendChild(para);
                }
                else
                {
                    var para = document.createElement("h4");
                    var node = document.createTextNode("You lose!");
                    para.appendChild(node);
                    let resultDiv = document.getElementById("result");
                    resultDiv.appendChild(para);
                }
                newgame.style.display = "inline-block";

            }
        }
        let rock = document.querySelector("#rock");
        let paper = document.querySelector("#paper");
        let scissors = document.querySelector("#scissors");
        if (rock)
        {
            rock.addEventListener("click",function() {
                game("rock");
                checkResult();
            });
        }
        if (paper)
        {
            paper.addEventListener("click",function() {
                game("paper");
                checkResult();
            });
        }
        if (scissors)
        {
            scissors.addEventListener("click",function() {
                game("scissors");
                checkResult();
            });
        }
        if (newgame)
        {
            newgame.addEventListener("click",function() {
                play_count = 0;
                max_count = 5;
                score = 0;
                let scoresDiv = document.getElementById("scores");
                while (scoresDiv.hasChildNodes()) 
                {  
                    scoresDiv.removeChild(scoresDiv.firstChild);
                } 
                let resultDiv = document.getElementById("result");
                while (resultDiv.hasChildNodes()) 
                {  
                    resultDiv.removeChild(resultDiv.firstChild);
                } 
                newgame.style.display = "none";
            });
        }


    }


}