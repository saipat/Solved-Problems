// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.↴

// IOCE
// I => [ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ','s', 't', 'e', 'a', 'l' ]
// O => 'steal pond cake'
// C => do it in place
// E => empty array

// first reverse all the characters inthe message which gives us correct words order but with each word reversed
// then reverse the individual words in the message
// hold the currentword index as the start of the word and when u see a space or the end of message, keep it as the word end index.
// increment the currentWOrdIndex to i+1;


// Time => O(n) space => O(1)
function reverseWords(message){
    if (message.length === 0) return '';

    reverseCharacters(message, 0, message.length-1);

    let currentWordIndex = 0;
    
    // for the last word we dont have a space to reverse it so we need the equalTo check.
    for(let i=0; i<= message.length; i++) {
        if (i === message.length || message[i] === ' '){
            reverseCharacters(message, currentWordIndex, i-1);
            currentWordIndex = i + 1;
        }
    }

    return message.join(' ');
}

function reverseCharacters(message, leftIndex, rightIndex){
    while(leftIndex < rightIndex) {
        let temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;

        leftIndex ++;
        rightIndex --;
    }

    return message;
}



// test
let ip = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l']
console.log(`reverseWords(ip) => ${reverseWords(ip)}`);

ip = ['l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ','e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e', ' ','!']
console.log(`reverseWords(ip) => ${reverseWords(ip)}`);
