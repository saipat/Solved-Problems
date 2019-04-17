// Ask what kind of cards.
// Don't make assumptions.

// Suits
// Face value
// Card
// Deck
// shuffle the deck
// players info with cards at hand


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

    toString(value, suit){
        return `${faceValue[value]} ${suits[suit]}`
    }

    shuffle(cards){
        let counter = cards.length;

        while(counter > 0){
            let index =  Math.floor(Math.random() * counter);

            counter --;

            let temp = cards[counter];
            cards[counter] = cards[index];
            cards[index] = temp;
        }

        return cards;
    }
}

class Players{
    constructor(name, cards){
        this.name = name;
        this.hand = cards;
    }

    count(){
        return this.hand.length;
    }

    add(card){
        return this.hand.push(card);
    }
}

const d = new Deck();
console.log(d.addCards());
console.log(d.toString(12, 3));

console.log('cards shuffle');
console.log(d.shuffle(d.cardDeck));

console.log('Player details');
const p1 = new Players('Blue', [d.cardDeck[2]]);
console.log(p1);
p1.add(d.cardDeck[20]);
p1.add(d.cardDeck[12]);
p1.add(d.cardDeck[34]);
p1.add(d.cardDeck[2]);
p1.add(d.cardDeck[46]);
console.log(p1);
console.log(p1.count());




