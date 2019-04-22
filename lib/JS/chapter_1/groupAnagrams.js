// Given an array of strings, group anagrams together.

//     Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Output:
// [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.



const groupAnagrams = strs => {
    const map = {};
    
    // O(n)
    for (let str of strs) {
        
        // O(mlogm)
        const key = [...str].sort().join('');
        

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }

    return Object.values(map);
};


//test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
