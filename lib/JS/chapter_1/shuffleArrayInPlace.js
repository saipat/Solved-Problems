// Write a function for doing an in -place ↴ shuffle of an array.

// Time => O(n) and space => O(1)
function shuffleArray(arr){
    if(arr.length <= 0) return arr;

    for(let i=0; i<arr.length; i++){
        const randomChoice = getRandom(i, arr.length);

        if(i != randomChoice){
            let temp = arr[i];
            arr[i] = arr[randomChoice];
            arr[randomChoice] = temp;
        }
    }

    return arr;
}

function getRandom(i, arrLength){
    return Math.floor(Math.random() * (arrLength - i ))  + i;
}

// test
console.log(shuffleArray([1,2,3]));
