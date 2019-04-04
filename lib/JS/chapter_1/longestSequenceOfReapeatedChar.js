function maxBlock(array) {
    let set = new Set();
    let r;

    for(let i=0; i<array.length; i++){
         r = findSequenceLength(array[i])
        console.log(r[0], r[1]);
        
    }

    // console.log(r);
    
    return;
}

function findSequenceLength(s){
    if (s.length === 0) {
        throw new Error('There should be alteast one ch in the string');
    }
    if (s.length == 1) {
        return [s[0], 1];
    }
    let previousChar = 0;
    let longestRun = 0;
    let currentRun = 0;
    let max = 0;
    let currentChar, ch;

    for (let i=0; i<s.length; i++) {
        currentChar = s[i];
        if (currentChar == previousChar) {
            currentRun++;
        } else {
            longestRun = Math.max(currentRun, longestRun);
            // console.log(longestRun, currentRun, max );
            
            if(longestRun > max){
                ch = previousChar;
                max=longestRun;
            } else if(longestRun === currentRun){
                let x = s.charCodeAt(s.indexOf(ch));
                let y = s.charCodeAt(s.indexOf(currentChar))
                // console.log(x,ch,y, currentChar);
                
                ch = x > y ? currentChar : ch ;
                
            }else{
                continue;
            }
            // console.log(max, ch);
            
            currentRun = 1;
            previousChar = currentChar;
        }
    }
    
    return [ch, Math.max(currentRun, longestRun)];
}



// test

let array = ['AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC',
'BBBA',
 'RUNDMC',
  'DDADDDADDDDA',
  'ABBA',
  'ZZTOP',
  'MISSISSIPPI']
// console.log(maxBlock(array));
maxBlock(array);

// let array = ['i', 'o', 'u']
// maxBlock(array)

//  array = ['RIGAMAROLE',
// 'CONSTRUCTIVE',
// 'ASSIDUOUSLY'];
// maxBlock(array);