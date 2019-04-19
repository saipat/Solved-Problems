// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

//     Note:
// The solution set must not contain duplicate triplets.
//     Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

//     A solution set is:
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]

var threeSum = function (nums) {
    if (nums.length < 3) { return []; } // step 1

    nums.sort(function (val1, val2) {
        return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
    });

    // console.log(nums);

    var solution = [];
    var result = [];
    var used = [];

    var backTracking = function (m, n) { // step 4
        if (m == n) {
            console.log(`solution => ${solution}`);

            if (solution[0] + solution[1] + solution[2] === 0) {
                return result.push(solution.slice(0));
            }

            console.log(result);
            
            return false;
        } else {
            var last_num;
            for (var i = 0; i < nums.length; i++) {
                if (used[i]) { continue; } // step 2
                if (last_num == nums[i]) { continue; }
                if (m > 0 && solution[m - 1] > nums[i]) { continue; } // step 3
                used[i] = true;
                last_num = nums[i];
                solution[m] = nums[i];
                arguments.callee(m + 1, n);
                used[i] = false;
            }
        }
    }
    backTracking(0, 3);
    return result;
};





// test
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
