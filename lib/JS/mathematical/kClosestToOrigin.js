// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)

// Time => O(nlogn) Space => O(1)
function KClosestToOrigin(points, k){
    if(points.length === 0 || k===0) return [];
    return quickSelect(points, k, 0, points.length);
}

function quickSelect(points, k, lo, hi){
    while(lo < k && hi > k){
        const i = partition(points, lo, hi);

        if(i < k){
            lo = i + 1;
            continue;
        }

        hi = i;
    }

    return points.slice(0, k)
}

function partition(points, lo, hi){
    const mid = distance(points[hi-1]);

    let i = lo;

    for(let j=lo; j<hi-1; j++ ){
        if(distance(points[j]) <= mid){
            let temp = points[i];
            points[i] = points[j];
            points[j] = temp;
            i += 1;
        }
    }

    let temp = points[i];
    points[i] = points[hi-1];
    points[hi-1] = temp;

    return i;
}

function distance(point){
    return point[0] * point[0] + point[1] * point[1];
}


// test
console.log(KClosestToOrigin([[1, 3], [-2, 2]], 1));
console.log(KClosestToOrigin([[3, 3], [5, -1], [-2, 4]], 2));
console.log(KClosestToOrigin([[3, 3], [5, -1], [-2, 4]], 0));
