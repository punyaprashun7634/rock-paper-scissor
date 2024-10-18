
let options = ['Rock', 'Paper', 'Scissor'];
let humanChoice = 'Rock'

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
let getWinner = ()=>{
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

let result = getWinner();
if(result) console.log(result);
else console.log("Draw!!");

