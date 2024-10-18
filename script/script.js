let resetBtn = document.querySelector('.reset');
let playAgain = document.querySelector('.play-again');
let choices = document.querySelectorAll('.fa-regular');
let statusText = document.querySelector('.game-status');

let options = ['Rock', 'Paper', 'Scissor'];
let humanChoice = ""

let currGame = new Map();


const equalSet = (currGame, combination) => {
    if (currGame.size !== combination.size) {
      return false;
    }
    for(let [key, value] of currGame.entries()){
        if (!combination.has(value)) {
            return false;
        }
    }
    return true;
}

const getName = (value)=>{    
    for(let [key, val] of currGame.entries()){
        if(val===value){
            return key;
        }
    }
}
const getWinner = ()=>{
    currGame.set("Human", humanChoice);
    let computerChoice = options[Math.floor(Math.random()*options.length)]
    currGame.set("Computer", computerChoice);

    if(equalSet(currGame, new Set(['Rock','Paper'])))
        return getName('Paper');
    else if(equalSet(currGame, new Set(['Rock','Scissor'])))
        return getName('Rock');
    else if(equalSet(currGame, new Set(['Paper','Scissor'])))
        return getName('Scissor');
    else
        return false;
}

const updateStatus = ()=>{
    let winner = getWinner();
    statusText.style.display = 'block';
    if(!winner) statusText.innerHTML = "It's Draw!!"
    else{
        let count = document.querySelector(`.${winner}-count`);
        count.innerHTML++;
        statusText.innerHTML = `Winner is ${winner}`;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        if(!humanChoice){
            humanChoice = choice.className.split(" ")[0];
            choice.style.color = "red";
            
        }
        updateStatus();
    })
})

