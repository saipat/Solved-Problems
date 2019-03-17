// Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included. Write a program to find Nth Ugly Number.

// if n is in [1,2,3,4,5,6] return n;
// set count = 0;
// untill count === n, loop th'
// find the prime factors for each i.
// if any of the prime factor is not in the [2,3,5], then dont add it to the array.
// else add it.

// O(?)
// function nth_uglyNumber(n){
//     if (n <= 0) return null;

//     let result = [1,2,3,4,5,6];
//     if (result.includes(n)) return n;

//     let count = 1, primeFactors =[];
//     let allIn = true;
//     const arr = [2, 3, 5];
//     result =[];

//     // O(n)
//     while(result.length < n ){
//         //
//         primeFactors = primeFactor(count);
        
//         // O(m)
//         for(let j = 0; j< primeFactors.length; j++){
//             // O(m)
//             if (arr.includes(primeFactors[j]) === false ) {
//                 allIn = false;
//             }
//         }
        
//         if (allIn) {
//             result.push(count);
//         }

//         allIn = true;
//         count ++;
//     }

//     return result[n-1];
// }

// // O(n)
// function primeFactor(n){
//     let i=2, primefacts = [];
//     while (i <= n){
//         if(n % i === 0){
//             if (isPrime(i)){
//                 primefacts.push(i)
//             }
//         }
//         i++;
//     }
//     return primefacts;
// }

// function isPrime(n){
//     let i=2;
//     while ( i <= Math.sqrt(n)){
//         if(n % i === 0){
//             return false;
//         }
//         i++;
//     }
//     return true;
// }

// 
function nth_uglyNumber(n){
    if (n <= 0) return 0;

    let i=1, count=1;

    // O(n)
    while (n > count){
        i++;
        if(isUgly(i)) count ++;
    }

    return i;
}

function isUgly(num){
    num = maxDivide(num, 2);
    num = maxDivide(num, 3);
    num = maxDivide(num, 5);

    return (num === 1 ? 1 : 0);
}

function maxDivide(x, y){
    // O(log n)
    while(x % y === 0){
        x = x / y;
    }

    return x;
}


//Test cases

console.log(`nth_uglyNumber(10) => ${nth_uglyNumber(10)}`)
console.log(`nth_uglyNumber(11) => ${nth_uglyNumber(11)}`)
console.log(`nth_uglyNumber(4) => ${nth_uglyNumber(4)}`)
console.log(`nth_uglyNumber(1) => ${nth_uglyNumber(1)}`)
console.log(`nth_uglyNumber(0) => ${nth_uglyNumber(0)}`)