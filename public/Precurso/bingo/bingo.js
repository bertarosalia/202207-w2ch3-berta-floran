const bingo =()=>{
let user;
let counter = 0;
let lineDone = false;
let bingoCard =[];
let randomNumber;
let bomboRandomNumbers =[]; 
let numberOfTheBombo = [];  
const wellcome = () => {
    do{ 
       user =prompt("Wellcome to the game. What´s your name?");
      if (user === null || user === undefined || !isNaN(user)){
      alert(`You must enter a valid character`);
    }else{
        alert(`Hello ${user}`);
        getRandomNumbersCard();
    }
      }  while (user === null || user === undefined || !isNaN(user));
    };

     const bingoRules = console.log(`Those are the Bingo game rules:
     \n You will start with 100 points.
     \n You will have a bingo card with 15 numbers.
     \n There are 90 balls in the drum (from 1 to 90, inclusive).
     \n We will start to draw numbers and check if they exist in the cards. If they exist, an "X" will be marked. If not, you will lose 5 points.
     \n When you get all the numbers in a row, that will be a "LINE".
     \n When the card has crossed out all the numbers, the game will finish.`);

     const getRandomNumbersCard=() =>{
        bingoCard =[]; 
          do{
          randomNumber = Math.floor(Math.random() *90)+1
          if (!bingoCard.includes(randomNumber)){
            bingoCard.push(randomNumber);
          }
        }while(bingoCard.length <15);
        console.table(bingoCard);
        askBingoCard();
     };

const askBingoCard=()=>{
 let continueGame;
 continueGame= confirm (`Do you want to play with this card? (Click Accept to continue or Cancel to generate new numbers)`);
 if (continueGame === true){
     bingoRandomNumbers();
 }else {
     getRandomNumbersCard();
}
 
};

const bingoRandomNumbers = ()=> {
 numberOfTheBombo = Math.floor(Math.random()*91);
    if (bomboRandomNumbers.includes(numberOfTheBombo)|| numberOfTheBombo === 0){
        return bingoRandomNumbers();
    }else if
        (confirm(`The number ${numberOfTheBombo} has come out. Do you want to continue?`) === true){
        bomboRandomNumbers.push(numberOfTheBombo);
        console.log(bomboRandomNumbers);
        counter++;
        return checkCardNumbers(numberOfTheBombo);
            }else (alert(`Thanks for playing!`))
};     
   
const checkCardNumbers = (numberOfTheBombo) =>{
    for(let i =0; i<bingoCard.length; i++){
        if(bingoCard[i] === numberOfTheBombo){
            bingoCard[i] = "X";
        }
    }
    console.table(bingoCard)
    if(!lineDone){
    checkLine();
    } 
    checkBingo();
    };
   
    const checkLine=()=>{
        let tempX = 0;
        for(let i=0;i<5;i++){
            if(bingoCard[i]==='X'){
                tempX++;
            }
        }
        if(tempX===5){
            alert(`We have completed a line!`)
            lineDone = true;
        }
        tempX = 0
        for(let i=5;i<10;i++){
            if(bingoCard[i]==='X'){
                tempX++;
            }
        }
        if(tempX===5){
            alert(`We have completed a line!`)
            lineDone = true;
        }
        tempX = 0;
        for(let i=10;i<15;i++){
            if(bingoCard[i]==='X'){
                tempX++;
            }
        }
        if(tempX===5){
            alert(`We have completed a line!`)
            lineDone = true;
        }
    };

const checkBingo=()=>{
    let tempX = 0;
    for (let i=0; i< bingoCard.length; i++){
        if(bingoCard[i]=== "X"){
            tempX++;
        }
    }
    if(tempX===15){
        alert(`We have completed a bingo!`);
        playersRanking(); 
        playAgain();
    }else{
        return bingoRandomNumbers();
    }
};

const playAgain =()=>{
    const askPlayAgain= confirm(`Do you want to play again (ACCEPT) or finish the game(CANCEL)?`)? bingo(): alert(`Thanks for playing!`)
};

const playersRanking =() =>{
    const ranking =[
      {name: "Andrea", points: 250},
      {name: "Berta", points: 150},
      {name: "Cristian", points: 100},
      {name: "Manuela", points: 50},
      {name: user, points: 500-5 * counter},
    ];
    console.log(`Current game ranking`);
    ranking.sort (function(a,b){
      return b.points-a.points;
    });
    console.table(ranking);
    console.log(`The game has been completed in ${counter} turns`);
};
wellcome();
};
bingo();