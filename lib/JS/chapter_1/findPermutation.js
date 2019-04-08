// Write code to find permutation in JS.

function findPermutation(array){
    let result = [];

    const permute = (array, m=[]) => {
        if(array.length === 0){
            result.push(m);
        }else{
            for(let i=0; i<array.length; i++){
                let current = array.slice();
                let next = current.splice(i, 1);
                permute(current, m.concat(next));
            }
        }

        return result;
    }

    return permute(array);
}


// test
console.log(findPermutation([1,2,3]));
