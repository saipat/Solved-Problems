// Find whether a ginen number is ugly.

var isUgly = function (num) {
    if (num === 0) return false
    var n
    while (num !== 1) {
        n = num / 5
        if (Math.floor(n) === n) {
            num = n
            continue
        }

        n = num / 3
        if (Math.floor(n) === n) {
            num = n
            continue
        }

        n = num / 2
        if (Math.floor(n) === n) {
            num = n
            continue
        }

        return false
    }

    return true
};

// test

console.log(isUgly(10));
console.log(isUgly(12));
console.log(isUgly(14));
console.log(isUgly(7));
