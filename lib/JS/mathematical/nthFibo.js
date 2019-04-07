// Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

// Memoized approach with Time => (n) and Space =>O(n)
// class Fibber {
//     constructor() {
//         this.memo = {};
//     }

//     fib(n) {

//         // Edge case: negative index
//         if (n < 0) {
//             throw new Error('Index was negative. No such thing as a negative index in a series.');
//         }

//         // Base case: 0 or 1
//         else if (n === 0 || n === 1) {
//             return n;
//         }

//         // See if we've already calculated this
//         if (this.memo.hasOwnProperty(n)) {
//             return this.memo[n];
//         }

//         const result = this.fib(n - 1) + this.fib(n - 2);

//         // Memoize
//         this.memo[n] = result;

//         return result;
//     }
// }


// Time O(n) and Space O(1)
function fib(n){
    if(n < 0){
        throw new Error( "Can't have index.")
    }else if(n ===0 || n === 1){
        return n;
    }

    let prevPrev = 0
    let prev = 1;
    let current;

    for(let i=1; i<n; i++){
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

// test
console.log(fib(3));
