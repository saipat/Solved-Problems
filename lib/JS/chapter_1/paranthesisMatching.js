// Write a function that, given a sentence like the one below, along with the position of an opening parenthesis, finds the corresponding closing parenthesis position.

// IOCE
// I => "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." and openningParanthesisIndex => 
// O => Index of the matching closing paranthesis
// C =>
// E => string with no paranthesis, or empty string.


// we can use stack but here in this case instead of storing the chars in the stack, we are going to see how many chars the stack has.
// to do this, count the number of open parenthesis with a var openNestedParanthesis
// iterate th' the chars of the string starting at the given position + 1.
// if the char at that position is '(' then increment the openNestedParanthesis count by 1
// else if the char is ')', ckeck is openNestedParanthesis is 0. if it is return the position
// else decrement openNestedParanthesis by 1.
// finally if nothing matches, return -1;


// Time => O(n) and Space O(1).
function paranthesisMatching(str, index) {
    if(str.length ===0) return -1;
    
    let openNestedParanthesis = 0;

    for(let position = index + 1; position< str.length; position++){
        let ch = str[position];

        if(ch === '('){
            openNestedParanthesis += 1;
        }else if(ch === ')'){
            if (openNestedParanthesis === 0){
                return position;
            }

            openNestedParanthesis -= 1;
        }
    }

    return -1;
}





// test
let str = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';
console.log(`paranthesisMatching(str, 10) => ${paranthesisMatching(str, 10)}`); //79;