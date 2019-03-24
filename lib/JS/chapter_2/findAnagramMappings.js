// Given two lists Aand B, and B is an anagram of A.B is an anagram of A means B is made by randomizing the order of the elements in A.

// We want to find an index mapping P, from A to B.A mapping P[i] = j means the ith element in A appears in B at index j.

// These lists A and B may contain duplicates.If there are multiple answers, output any of them.

// For example, given

// A = [12, 28, 46, 32, 50]
// B = [50, 12, 32, 46, 28]
// We should return
// [1, 4, 3, 2, 0]
// as P[0] = 1 because the 0th element of A appears at B[1], and P[1] = 4 because the 1st element of A appears at B[4], and so on.
//     Note:

// A, B have equal lengths in range[1, 100].
//     A[i], B[i] are integers in range[0, 10 ^ 5].

// IOCE
// I => 2 lists // A = [12, 28, 46, 32, 50] and B = [50, 12, 32, 46, 28]
// O => [1, 4, 3, 2, 0]
// C => they can have dups.
// E => one of the lists may be empty, -1, what if the 2 lists are of not eq length;?

// iterate th' list1 and get that element's index from list2.

// time => O(n) and Space => O(n)
function findAnagrams(list1, list2){
    let result = [], index;

    for(let i=0; i< list1.length; i++){
        index = list2.indexOf(list1[i]);
        result.push(index);
    }

    return result;
}

// test
let list1 = [12, 28, 46, 32, 50];
let list2 = [50, 12, 32, 46, 28];
console.log(`findAnagrams(list1, list2) => ${findAnagrams(list1, list2)}`);