/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let indices = [-1, -1];
    nums.sort((a, b) => a-b);

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            if(indices[0] == -1){
                indices[0] = i;
                indices[1] = i;
            } else{
                indices[1] = i;
            }
        }
    }

    return indices;
};