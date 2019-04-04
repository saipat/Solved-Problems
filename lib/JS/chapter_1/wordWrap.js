// We are building a word processor and we would like to implement word wrapping functionality.

// Given a maximum number of characters in a line followed by a list of words, return a collection of strings where each line contains as many words as possible concatenated by a space.The length of each string should not exceed the maximum length.

// Example input
// 11
// abc
// xyz
// foobar
// cuckoo
// seven
// hello
// Example output
// abc xyz
// foobar
// cuckoo
// seven hello


// var wordwrap = function (split_string, max_char) {

//     var sum_length_of_words = function (word_array) {
//         var out = 0;
//         if (word_array.length != 0) {
//             for (var i = 0; i < word_array.length; i++) {
//                 var word = word_array[i];
//                 out = out + word.length;
//             }
//         };
//         return out;
//     }

//     var split_out = [[]];
//     // var split_string = long_string.split(' ');
//     for (var i = 0; i < split_string.length; i++) {
//         var word = split_string[i];

//         // console.log(split_out[split_out.length - 1] + word.length)l;
        
//         if ((sum_length_of_words(split_out[split_out.length - 1]) + word.length) > max_char) {
//             split_out = split_out.concat([[]]);
//             // console.log(split_out);
            
//         }

//         split_out[split_out.length - 1] = split_out[split_out.length - 1].concat(word);
//     }

//     for (var i = 0; i < split_out.length; i++) {
//         split_out[i] = split_out[i].join(" ");
//         // console.log(split_out);
//     }

//     return split_out.join('\n');
// };


function wrapLines(lineLength, words) {
  let group=[[]];

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (sumOfWords(group[group.length - 1] + word.length) > lineLength) {
        group = group.concat([[]]);
    }

    group[group.length - 1] = group[group.length - 1].concat(word);
}

for (let i = 0; i < group.length; i++) {
    group[i] = group[i].join(' ');
}

return group;
}

function sumOfWords(array) {
    let length = 0;

    if (array.length != 0) {
        for (let i = 0; i < array.length - 1; i++) {
            length += array[i].length;
        }
    }

    // console.log(array, length);
    
    console.log(length);
    
    return (length);
}

var test_string = "IT was the best time of times it was the worst time of times";
test_string = test_string.split(' ');
// console.log(test_string);


// test
console.log(wrapLines(8, test_string));
console.log(wrapLines(13, ['abc', 'xyz', 'foobar', 'cuckoo', 'seven', 'hello']));


//   let group=[[]];

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     if (sumOfWords(group[group.length - 1] + word.length) > lineLength) {
//         group = group.concat([[]]);
//     }

//     group[group.length - 1] = group[group.length - 1].concat(word);
// }

// for (let i = 0; i < group.length; i++) {
//     group[i] = group[i].join(' ');
// }

// return group.join('\n');
// }

// function sumOfWords(array) {
//     let length = 0;

//     if (array.length != 0) {
//         for (let i = 0; i < array.length - 1; i++) {
//             length += array[i].length;
//         }
//     }

//     return length;