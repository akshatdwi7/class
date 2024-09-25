// 2. Use getRandomCard() to set the values of firstCard and secondCard
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl =document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}




function startGame() {
    isAlive = true
    let firstCard =getRandomCard()
    let secondCard =getRandomCard()
    cards=[firstCard, secondCard]
      sum = firstCard + secondCard;
           renderGame()
 // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    if(isAlive === true  && hasBlackJack === false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

let player ={
   name : "Akshat" ,
    chips : 678 ,
    sayHello: function(){
        console.log("howddy?")
    }
} //objects in the javascript 
player.sayHello()


let playerEl =document.getElementById("player-el")
playerEl.textContent = player.name  + " :  " +  "$"+ player.chips 