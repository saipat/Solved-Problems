// Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included. Write a program to find Nth Ugly Number.

// if n is in [1,2,3,4,5,6] return n;
// set count = 0;
// untill count === n, loop th'
// find the prime factors for each i.
// if any of the prime factor is not in the [2,3,5], then dont add it to the array.
// else add it.

// O(n3)
function nth_uglyNumber(n){
    if (n <= 0) return null;

    let result = [1,2,3,4,5,6];
    if (result.includes(n)) return n;

    let count = 1, primeFactors =[];
    let allIn = true;
    const arr = [2, 3, 5];
    result =[];

    while(result.length < n ){
        primeFactors = primeFactor(count);
        
        for(let j = 0; j< primeFactors.length; j++){
            if (arr.includes(primeFactors[j]) === false ) {
                allIn = false;
            }
        }
        
        if (allIn) {
            result.push(count);
        }

        allIn = true;
        count ++;
    }

    return result[n-1];
}

function primeFactor(n){
    let i=2, primefacts = [];
    while (i <= n){
        if(n % i === 0){
            if (isPrime(i)){
                primefacts.push(i)
            }
        }
        i++;
    }
    return primefacts;
}

function isPrime(n){
    let i=2;
    while ( i <= Math.sqrt(n)){
        if(n % i === 0){
            return false;
        }
        i++;
    }
    return true;
}


//Test cases

console.log(`nth_uglyNumber(10) => ${nth_uglyNumber(10)}`)
console.log(`nth_uglyNumber(11) => ${nth_uglyNumber(11)}`)
console.log(`nth_uglyNumber(4) => ${nth_uglyNumber(4)}`)
console.log(`nth_uglyNumber(1) => ${nth_uglyNumber(1)}`)