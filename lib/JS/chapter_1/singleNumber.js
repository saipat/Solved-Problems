var singleNumber = function (nums) {
    if(nums.length <= 1) return nums;
    
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (hash[el]) {
            hash[el] += 1;
        } else {
            hash[el] = isNaN(hash[el]) ? 1 : hash[el] + 1;
        }
    }

    let odd = Object.keys(hash).filter(function (key) {
        return hash[key] === 1;
    })

    return odd.join();
};

// test
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
