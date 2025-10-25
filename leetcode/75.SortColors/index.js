import { data } from './data.js'

const sortColors = function (nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1
  while (mid <= high) {
    if (nums[mid] === 0) {
      ;[nums[low], nums[mid]] = [nums[mid], nums[low]]
      mid++
      low++
    } else if (nums[mid] === 1) {
      mid++
    } else {
      ;[nums[high], nums[mid]] = [nums[mid], nums[high]]
      high--
    }
  }
  return nums
}

console.log(sortColors(data)) // [0,0,1,1,2,2]
