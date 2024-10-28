const array = [34, 54, 54, 22, 44, 22]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        //자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break
      }
    }
  }
  return arr
}

console.log(insertionSort(array))
