//variables 
//variables for the game board, restart button and result board
const GAME_BOARD = document.getElementById('board')
const RESULT_BOARD = document.getElementById('result')
const RESTART_BTN = document.getElementById('restart')
//create an array of 18 cards x 2
const CARDS_ARRAY = [
    {
        name: 'card1',
        img: 'cards/1.jpeg'
    },
    {
        name: 'card1',
        img: 'cards/1.jpeg'
    },
    {
        name: 'card2',
        img: 'cards/2.jpeg'
    },
    {
        name: 'card2',
        img: 'cards/2.jpeg'
    },
    {
        name: 'card3',
        img: 'cards/3.jpeg'
    },
    {
        name: 'card3',
        img: 'cards/3.jpeg'
    },
    {
        name: 'card4',
        img: 'cards/4.jpeg'
    },
    {
        name: 'card4',
        img: 'cards/4.jpeg'
    },
    {
        name: 'card5',
        img: 'cards/5.jpeg'
    },
    {
        name: 'card5',
        img: 'cards/5.jpeg'
    },
    {
        name: 'card6',
        img: 'cards/6.jpeg'
    },
    {
        name: 'card6',
        img: 'cards/6.jpeg'
    },
    {
        name: 'card7',
        img: 'cards/7.jpeg'
    }, {
        name: 'card7',
        img: 'cards/7.jpeg'
    },
    {
        name: 'card8',
        img: 'cards/8.jpeg'
    },
    {
        name: 'card8',
        img: 'cards/8.jpeg'
    },
    {
        name: 'card9',
        img: 'cards/9.jpeg'
    },
    {
        name: 'card9',
        img: 'cards/9.jpeg'
    },
    {
        name: 'card10',
        img: 'cards/10.jpeg'
    },
    {
        name: 'card10',
        img: 'cards/10.jpeg'
    },
    {
        name: 'card11',
        img: 'cards/11.jpeg'
    },
    {
        name: 'card11',
        img: 'cards/11.jpeg'
    },
    {
        name: 'card12',
        img: 'cards/12.jpeg'
    },
    {
        name: 'card12',
        img: 'cards/12.jpeg'
    },
    {
        name: 'card13',
        img: 'cards/13.jpeg'
    },
    {
        name: 'card13',
        img: 'cards/13.jpeg'
    },
    {
        name: 'card14',
        img: 'cards/14.jpeg'
    },
    {
        name: 'card14',
        img: 'cards/14.jpeg'
    },
    {
        name: 'card15',
        img: 'cards/15.jpeg'
    },
    {
        name: 'card15',
        img: 'cards/15.jpeg'
    },
    {
        name: 'card16',
        img: 'cards/16.jpeg'
    },
    {
        name: 'card16',
        img: 'cards/16.jpeg'
    },
    {
        name: 'card17',
        img: 'cards/17.jpeg'
    },
    {
        name: 'card17',
        img: 'cards/17.jpeg'
    },
    {
        name: 'card18',
        img: 'cards/18.jpeg'
    },
    {
        name: 'card18',
        img: 'cards/18.jpeg'
    }
]


//event listeners



//functions
function settingBoard() {
    for (let i = 0; i < CARDS_ARRAY.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'cards/top_card.png')
        card.setAttribute('data-id', i)
        card.setAttribute('border', '3px solid black')
        card.setAttribute('width', '170px')
        card.setAttribute('height', '170px')
        card.addEventListener('click', flipCard)
        GAME_BOARD.appendChild(card)
    }
}

settingBoard()