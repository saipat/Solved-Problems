// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree[3, 9, 20, null, null, 15, 7],
//     3
//     / \
// 9  20
//     /  \
// 15   7
// return its zigzag level order traversal as:
// [
//     [3],
//     [20, 9],
//     [15, 7]
// ]

const zigzag = (res=[], root, level=0) => {
    if(!root) return [];

    res[level] = level % 2 ? [root.val, ...res[level] || []] : [...res[level] || [], root.val];

    zigzag(res, root.left, level+1);
    zigzag(res, root.right, level+1);

    return res;
}