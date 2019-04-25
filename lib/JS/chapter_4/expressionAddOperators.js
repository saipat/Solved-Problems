// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

// Example 1:

// Input: num = "123", target = 6
// Output: ["1+2+3", "1*2*3"] 
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2", "2+3*2"]
// Example 3:

// Input: num = "105", target = 5
// Output: ["1*0+5","10-5"]
// Example 4:

// Input: num = "00", target = 0
// Output: ["0+0", "0-0", "0*0"]
// Example 5:

// Input: num = "3456237490", target = 9191
// Output: []

// dfs
function expressionAddOperators(num, target){
    let result = [];

    function helper(num ,target, temp, curResult, prevNum){
        if(curResult === target && num.length === 0){
            result.push(temp);
            return;
        }

        for(let i=1; i<=num.length; i++) {
            let curStr = num.substring(0, i);

            if(curStr.length > 0 && curStr.charAt(0) === '0') {
                continue;
            }

            let curNum = parseInt(curStr);
            let next = num.substring(i);

            if(temp.length != 0){
                helper(next, target, temp + '*' + curNum, (curResult - prevNum) + prevNum * curNum, prevNum * curNum);
                helper(next, target, temp + '+' + curNum, curResult + curNum, curNum);
                helper(next, target, temp + '-' + curNum, curResult - curNum, -curNum);
            }else{
                helper(next, target, curStr, curNum, curNum);
            }
        }
        
    }

    helper(num, target, '', 0, 0);

    return result;
}


// test
console.log(expressionAddOperators('123', 6));
// console.log(expressionAddOperators('00', 0));
// console.log(expressionAddOperators('3456237490', 9191));
