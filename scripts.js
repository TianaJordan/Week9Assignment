// War Card Game

// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Use console.log() to display turns, points, cards used, and the outcome of the game

// Deck: Create a deck of 52 cards
//      - 13 of each suit (clubs, spades, hearts, diamonds)
//      - Values: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King    

// Card: Must include a value + a suit (create as object to store properties)
//      - Need a way to rank and compare values of cards 

// Player: 2 players
//      - Player1 and Player2
//      - Each player needs a hand of 26 cards 
//      - Points stored for each player

// To play the game:
//      - Need a way to shuffle deck and deal cards to each player
//      - Need a way to keep track of points for each turn
//      - Determine winner based on the higher score

// -------------------------------------------------------------------------------

// Deck:

class Deck {
    constructor() {
        this.deck = [];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        this.suits = ["Spades ♠", "Hearts ♥", "Diamonds ♦", "Clubs ♣"]
    }

// Step 1a: create the deck by looping through this.values and this.suits arrays
// Step 1b: create a new card (object) and push each card to the this.deck array 

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.values.length; j++) {

               let card = {
                name: `${this.values[j]} of ${this.suits[i]}`,
                value: j + 1
               }

               this.deck.push(card);  
            //    console.log(card); 
            }      
        }
    }

// Step 2: create method to shuffle the deck using a for loop

     shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) { 
            let j = Math.floor(Math.random() * (i + 1)); 
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }  
}

// instantiate deck class
const deck = new Deck
deck.createDeck()
deck.shuffleDeck()
console.log('Shuffled Deck:', deck.deck)

// Step 3: playing the game:
//      - create players -- holds player name, hand of cards, points start at 0
//      - deal cards to players
//      - 26 turns 
//      - record cards played and points earned for each turn
//      - determine winner based on total points

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            hand: [],
            points: 0,
        }
        this.player2 = {
            name: 'Player 2',
            hand: [],
            points: 0,
        }
    }

// method to deal the deck using a while loop to push cards to the empty hand array of each player --- .shift will remove the card from the deck after it is dealt 

    dealCards() {
        const deck = new Deck
        deck.createDeck();
        deck.shuffleDeck();

        while (deck.deck.length > 0) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }

        console.log('Player 1 Hand:',this.player1.hand);
        console.log('Player 2 Hand:',this.player2.hand);
    } 

// method to determine which player has the higher card + add points to that player using a for loop

    playCard() {
        for (let i = 0; i < this.player1.hand.length; i++) {
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.points ++

            console.log(`
                Player 1 Card: ${this.player1.hand[i].name}
                Player 2 Card: ${this.player2.hand[i].name}

                Player 1 wins a point!

                Player 1 Points: ${this.player1.points}
                Player 2 Points: ${this.player2.points}`)

            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.points ++

                console.log(`
                Player 1 Card: ${this.player1.hand[i].name}
                Player 2 Card: ${this.player2.hand[i].name}
    
                Player 2 wins a point!
    
                Player 1 Points: ${this.player1.points}
                Player 2 Points: ${this.player2.points}`)

            } else {
                console.log(`
                Player 1 Card: ${this.player1.hand[i].name}
                Player 2 Card: ${this.player2.hand[i].name}
        
                Tie! Zero points awarded.
        
                Player 1 Points: ${this.player1.points}
                Player 2 Points: ${this.player2.points}`)
            }
        } 

// comparing total points to determine winner of the game

        if (this.player1.points > this.player2.points) {
            console.log(`
            Game Over: Player 1 Wins!

            Player 1 Score: ${this.player1.points}
            Player 2 Score: ${this.player2.points}`)
            
        } else if (this.player2.points > this.player1.points) {
            console.log(`
            Game Over: Player 2 Wins!
            
            Player 1 Score: ${this.player1.points}
            Player 2 Score: ${this.player2.points}`)

        } else {
            console.log(`
            Game Over: It's a tie!
            
            Player 1 Score: ${this.player1.points}
            Player 2 Score: ${this.player2.points}`)
        }
    }
}

// instantiate game class
const game = new Game
game.dealCards()
game.playCard()