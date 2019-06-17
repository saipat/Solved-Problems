// A string S of lowercase letters is given.We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

//     Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9, 7, 8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

const partitionLabels = S => {
    if(S.length === 0) return [];

    const map = S.split('').reduce((total, ch, index) => {
        total[ch] = index;
        return total;
    }, {});

    let start = 0, end = 0, result = [];

    for(let i=0; i<S.length; i++){
        end = Math.max(end, map[S[i]]);

        if( i === end){
            result.push(end-start+ 1);
            start = end + 1;
        }
    }

    return result;
}

// test
console.log(partitionLabels("ababcbacadefegdehijhklij"));
