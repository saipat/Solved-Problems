// Someone has built an auto - suggest UI around first - class fetcher- functions.

//     sampleFetcher('prefix', function (results) { /* results is an array of strings */ });

// Someone has already written a fruitFetcher, animalFetcher, and mineralFetcher. (I draw a picture of an auto - suggest box with sample entries of: apple, apricot, aardvark, and amethyst).Now you're asked to prepare a demo that uses the same existing fetchers and the same autocomplete UI, but combine individual fetchers. For example: 

// function callback = (results) = {}

// function fetchAll(‘a’, callback) {
//     let resultArr[]
//     let count = 0;


//     fruitFetcher(‘a’, function (fruitresults) {
//         count++;
//         resultArr.push(...fruitresults)
//     })
//     animalFetcher(‘a’, function (animailsresults) {
//         count++;
//         resultArr.push(...animailsresults)
//     })

//     while (count != 2) { }

//     callback(resultArr)
// }

// fetchAll(‘a’, callback)

// fetchAll = combineFetchers([fruitFetcher, animalFetcher, mineralFetcher]);

// Fruit = > [‘apple’, ‘avocado’]
// animal = > [‘ant’, ‘animal1’]
// min = > [‘a1’, ‘a2’][]

// arr[i](‘a’, callback); = > [‘apple’, ‘avocado’]

// result[‘apple’, ‘avocado’, ‘ant’, ‘animal1’, ‘a1’, ‘a2’]

// fruitFetcher(‘a’, callback)

// //declare empty result = []
// //iterate th’ fetcherArrays;
// // collect its result in the result array;

// function combineFetchers(arr) {
//     let resultArr = [];

//     for (let i = 0; i < arr.length; i++) {


//     }
// }


// Write a function to decode a string:

// "a(bcd){3}e" -> "a bcd bcd bcd e"

// "a(bc(d){4}e){3}f" -> “a bc dddd e bcddddebcdddde f”

// Parentheses can be nested.

//     stack => a()ch = bcd

// function decode(str) {
//     let stack = []
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i]
//         if (

// }	
