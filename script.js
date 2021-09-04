

let cards = [];
let sum = 0;
hasBlackJack = false;
isAlive = false;
let message = "";
messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl =  document.getElementById("cards-el");

let player = {
  name: "Ekeopre",
  chips: 200
}

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1;
   return randomNumber;
    if(getRandomCard() === 1){
        return 11
        
    }else if(  getRandomCard === 11 || getRandomCard === 12 || getRandomCard === 13) {
        
        return 10
    }else {
        return randomNumber
    }
}



function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
  renderGame();
}

function renderGame(){
if(sum === 21) {
  message = "Good job!!! you have Black jack!"
  hasBlackJack = true;
}else if (sum < 21) {
  message = "Do you want to pick a new card?"
}else {
  message = "You are out of the game"
  isAlive = false;
}

messageEl.textContent = message; 
sumEl.textContent = "Sum is: " + sum;
cardsEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++){

  cardsEl.textContent += " " + cards[i] + " "
}
}

function newCard(){

if (isAlive === true || hasBlackJack === false) {
let card = getRandomCard()
  sum += card;
  cards.push(card)
  console.log("Draw a new card");
  console.log(cards);

  renderGame();
} else {

 return restart();
}
}

function restart() {
window.location.reload()
}
