// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]


// Time => O(n^2) and Space O(n)
function removeInvalidParentheses(str){
    if(!str) return [];

    let result = [], queue=[], visited = new Set(), found = false;

    queue.push(str);
    visited.add(str);

    while(queue.length != 0){
        let s = queue.shift();

        if(isValid(s)){
            found = true;
            result.push(s)
        }

        if(found){
            continue;
        }

        for(let i=0; i<s.length; i++){
            if(s[i] != '(' && s[i] != ')'){
                continue;
            }

            let t = s.substring(0, i) + s.substring(i+1);

            if(!visited.has(t)){
                visited.add(t);
                queue.push(t);
            }
        }
    }

    return result;
}

function isValid(s){
    let count=0;

    for(let i=0; i<s.length; i++){
        if(s[i] != '(' && s[i] != ')'){
            continue;
        }

        if(s[i] === '('){
            count ++;
        }else if(s[i] === ')'){
            count --;
        }

        if(count < 0){
            return false;
        }
    }

    return count === 0;
}

// test
console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('(a)())()'));
console.log(removeInvalidParentheses(')('));
