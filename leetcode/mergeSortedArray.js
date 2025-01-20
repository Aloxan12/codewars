// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//     The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//     Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
//     The result of the merge is [1].
//     Example 3:
//
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
//     The result of the merge is [1].
//     Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

var merge = function(nums1, m, nums2, n) {
    return [...nums1, ...nums2].filter(Boolean).sort((a, b) => a - b).slice(0, m + n)
};

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))


// const toCARG = (oldSum, newSum,)=>{
//  return Math.round((Math.pow((newSum / oldSum), (1 / 4)) - 1) * 100)
// }
// console.log(toCARG(872, 1000))

//
// const old = [{id: 1}, {id: 2}]
// const newArr = [{id: 2}, {id: 3}]
//
// const deletedArr = newArr.filter(item => !old.some(i => i.id === item.id))
// console.log(deletedArr)

const arr = [1,2,3,4,6,8,9,10]

const mergeBigArray = (arr) => {
    const result= [];
    for(let i= 0; i<arr.length; i++){
        const startIndex = 0
        const endIndex = 0
        if(arr[i] + 1 === arr[i + 1]){
            result.push('-')
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(mergeBigArray(arr))
// in [1,2,3,4,6,8,9,10]
// out [1-4, 6, 8-10]