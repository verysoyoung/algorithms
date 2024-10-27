const array = [34, 54, 54, 22, 44, 22]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i //가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        // console.log(arr[minIndex], arr[j])
        minIndex = j
      }
    }
    //스와프(swap) 작은원소와 계속 바꿔줌
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

console.log(selectionSort(array))
