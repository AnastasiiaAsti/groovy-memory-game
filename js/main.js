//variables 
//variables for the game board, restart button and result board
const GAME_BOARD = document.getElementById('board')
const RESULT_BOARD = document.getElementById('result')
const RESTART_BTN = document.getElementById('restart')
const WINNING_MSG = document.getElementById('end-message')
const WINNING_MSG_TEXT = document.getElementById('end-message-text')
const TIMER_HEADER = document.getElementById('timer')
//create an array of 18 cards x 2
const CARDS_ARRAY = [
    {
        name: 'card1',
        img: 'css/cards/1.jpeg'
    },
    {
        name: 'card1',
        img: 'css/cards/1.jpeg'
    },
    {
        name: 'card2',
        img: 'css/cards/2.jpeg'
    },
    {
        name: 'card2',
        img: 'css/cards/2.jpeg'
    },
    {
        name: 'card3',
        img: 'css/cards/3.jpeg'
    },
    {
        name: 'card3',
        img: 'css/cards/3.jpeg'
    },
    {
        name: 'card4',
        img: 'css/cards/4.jpeg'
    },
    {
        name: 'card4',
        img: 'css/cards/4.jpeg'
    },
    {
        name: 'card5',
        img: 'css/cards/5.jpeg'
    },
    {
        name: 'card5',
        img: 'css/cards/5.jpeg'
    },
    {
        name: 'card6',
        img: 'css/cards/6.jpeg'
    },
    {
        name: 'card6',
        img: 'css/cards/6.jpeg'
    },
    {
        name: 'card7',
        img: 'css/cards/7.jpeg'
    }, {
        name: 'card7',
        img: 'css/cards/7.jpeg'
    },
    {
        name: 'card8',
        img: 'css/cards/8.jpeg'
    },
    {
        name: 'card8',
        img: 'css/cards/8.jpeg'
    },
    {
        name: 'card9',
        img: 'css/cards/9.jpeg'
    },
    {
        name: 'card9',
        img: 'css/cards/9.jpeg'
    },
    {
        name: 'card10',
        img: 'css/cards/10.jpeg'
    },
    {
        name: 'card10',
        img: 'css/cards/10.jpeg'
    },
    {
        name: 'card11',
        img: 'css/cards/11.jpeg'
    },
    {
        name: 'card11',
        img: 'css/cards/11.jpeg'
    },
    {
        name: 'card12',
        img: 'css/cards/12.jpeg'
    },
    {
        name: 'card12',
        img: 'css/cards/12.jpeg'
    },
    {
        name: 'card13',
        img: 'css/cards/13.jpeg'
    },
    {
        name: 'card13',
        img: 'css/cards/13.jpeg'
    },
    {
        name: 'card14',
        img: 'css/cards/14.jpeg'
    },
    {
        name: 'card14',
        img: 'css/cards/14.jpeg'
    },
    {
        name: 'card15',
        img: 'css/cards/15.jpeg'
    },
    {
        name: 'card15',
        img: 'css/cards/15.jpeg'
    },
    {
        name: 'card16',
        img: 'css/cards/16.jpeg'
    },
    {
        name: 'card16',
        img: 'css/cards/16.jpeg'
    },
    {
        name: 'card17',
        img: 'css/cards/17.jpeg'
    },
    {
        name: 'card17',
        img: 'css/cards/17.jpeg'
    },
    {
        name: 'card18',
        img: 'css/cards/18.jpeg'
    },
    {
        name: 'card18',
        img: 'css/cards/18.jpeg'
    }
]

let arrayWithNames = []
let arrayWithIds = []
let chosenCards = []

let timerSeconds = 120

//event listeners
//to the reset button
RESTART_BTN.addEventListener('click', handleReset)


//functions
// function to sort cards randomly
CARDS_ARRAY.sort(() => 0.5 - Math.random())

//evoking displayTimer func
displayTimer(timerSeconds)

//functions for timer
const countDown = setInterval(function () {
    timerSeconds--
    displayTimer(timerSeconds)
    //cut the cutdown when reaches 0
    if (timerSeconds <= 0) {
        clearInterval(countDown)
        TIMER_HEADER.innerHTML = "Stay Groovy or leave, Man!"
    }
}, 1000)
//function to display a timer on the page
function displayTimer(second) {
    //define minutes and seconds.
    const min = Math.floor(second / 60)
    const sec = Math.floor(second % 60)
    //a\swap innerHTML for the time how it suppose to look
    TIMER_HEADER.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
}

//function to set the board
function render() {
    //itterate through the array
    for (let i = 0; i < CARDS_ARRAY.length; i++) {
        //create a card element for the image in each cell
        let card = document.createElement('img')
        //add path, index, border and exact size
        card.setAttribute('src', 'css/cards/top_card.png')
        card.setAttribute('data-id', i)
        card.setAttribute('border', '3px solid black')
        card.setAttribute('width', '130px')
        card.setAttribute('height', '130px')
        card.addEventListener('click', flipCard)
        //add cards to the game board
        GAME_BOARD.appendChild(card)
    }
}

render()

//function to flip cards
function flipCard() {
    //get the index of the card from the CARD_ARRAY 
    let cardId = this.getAttribute('data-id')
    //we want to add the id to the array of cards
    arrayWithIds.push(cardId)
    //adding CARDS_ARRAY.name to the chosenCards array based on the ids
    arrayWithNames.push(CARDS_ARRAY[cardId].name)
    //add an image to the cell
    this.setAttribute('src', CARDS_ARRAY[cardId].img)
    //after we checked for match if 2 cars were open we want to add empty card or top card.
    //will need to use setTimeout() to hold off on flipping for couple secs
    if (arrayWithNames.length === 2) {
        setTimeout(checkForMatch, 400)
    }
}

//function to check for matching pairs
function checkForMatch() {
    //set a var for all the cards
    let cards = document.querySelectorAll('img')
    //define 2 cards we going to check
    const cardOneId = arrayWithIds[0]
    const cardTwoId = arrayWithIds[1]
    //how are we going to check them? against what?
    //if cards match -> add empty_cell image
    //if cards do not match -> bring back top_card image
    if (arrayWithNames[0] === arrayWithNames[1] && arrayWithIds[0] !== arrayWithIds[1]) {
        cards[cardOneId].setAttribute('src', 'css/cards/empty_cell.png')
        cards[cardTwoId].setAttribute('src', 'css/cards/empty_cell.png')
        cards[cardOneId].classList.add('clicked')
        cards[cardTwoId].classList.add('clicked')
        //move cards into an empty array
        chosenCards.push(arrayWithNames)
    } else {
        cards[cardOneId].setAttribute('src', 'css/cards/top_card.png')
        cards[cardTwoId].setAttribute('src', 'css/cards/top_card.png')
        //console.log('Try again')
    }
    //if the amount of cards in the new array of winning cards is the same //that was in our current card array -> display a winning message
    arrayWithNames = []
    arrayWithIds = []
    RESULT_BOARD.innerHTML = chosenCards.length
    if (chosenCards.length === CARDS_ARRAY.length / 2) {
        WINNING_MSG_TEXT.innerHTML = 'Congrats! You found a pair for everyone ;)'
        WINNING_MSG.classList.add('show')
    }
}


//function for the restart button
function handleReset() {
    //add event listener to the button
    //upon click we go back to the state of settingBoard
    WINNING_MSG.classList.remove('show')
    window.location.reload()
}


