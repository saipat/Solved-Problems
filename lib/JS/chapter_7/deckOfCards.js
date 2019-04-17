// Ask what kind of cards.
// Don't make assumptions.

// Suits
// Face value
// Card
// Deck


const suits = {
    0: 'Club',
    1: 'Heart',
    2: 'Diamond',
    3: 'Spade'
}

const faceValue = {
    1: 'A',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
}


class Card{
    constructor(faceValue, suit){
        this.faceValue = faceValue;
        this.suit = suit;
    }
}

class Deck{
    constructor(){
        this.cardDeck = Array(); 
    }

    addCards(){
        for(let suit in suits){
            for(let i=1; i<=13; i++){
                this.cardDeck.push(new Card(faceValue[i], suits[suit]))
            }
        }

        return this.cardDeck;
    }
}

const d = new Deck();
console.log(d.addCards());
