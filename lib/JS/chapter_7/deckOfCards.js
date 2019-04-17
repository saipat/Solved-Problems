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

class Card{
    constructor(faceValue, suit){
        this.faceValue = faceValue;
        this.suit = suit;
    }
}