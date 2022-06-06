//variables 
//variables for the game board, restart button and result board
const GAME_BOARD = document.getElementById('board')
const RESULT_BOARD = document.getElementById('result')
const RESTART_BTN = document.getElementById('restart')
const WINNING_MSG = document.getElementById('end-message')
const WINNING_MSG_TEXT = document.getElementById('end-message-text')
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
        img: 'cards/6.jpeg'
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


//event listeners



//functions
// function to sort cards randomly
CARDS_ARRAY.sort(() => 0.5 - Math.random())
//function to set the board
function settingBoard() {
    //itterate through the array
    for (let i = 0; i < CARDS_ARRAY.length; i++) {
        //create a card element for the image in each cell
        let card = document.createElement('img')
        //add path, index, border and exact size
        card.setAttribute('src', 'css/cards/top_card.png')
        card.setAttribute('data-id', i)
        card.setAttribute('border', '3px solid black')
        card.setAttribute('width', '170px')
        card.setAttribute('height', '170px')
        //card.addEventListener('click', flipCard)
        //add cards to the game board
        GAME_BOARD.appendChild(card)
    }
}

settingBoard()

//function to check for matching pairs
function checkForMatch() {
    //set a var for all the cards
    let cards = document.querySelectorAll('img')
    //define 2 cards we going to check
    const cardOne = cardOneId[0]
    const cardTwo = cardTwoId[1]
    //how are we going to check them? against what?
    //if cards match -> add empty_cell image
    //if cards do not match -> bring back top_card image
    //move cards into an empty array
    //if the amount of cards in the new array of winning cards is the same that was in our current card array -> display a winning message
}

//function to flip cards
function flipCard() {
    //get the index of the card
    //we want to add the id to the array of cards
    //after we checked for match if 2 cars were open we want to add empty card or top card.
    //will need to use setTimeout() to hold off on flipping for couple secs
}

//function for the restart button
function handleReset() {
    //add event listener to the button
    //upon click we go back to the state of settingBoard
}