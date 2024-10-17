function selectionSort(dataList) {
  for (let i = 0; i < dataList.length - 1; i++) {
    let minIndx = i;
    for (let j = i + 1; j < dataList.length; j++) {
      if (dataList[minIndx] > dataList[j]) {
        minIndx = j;
      }
    }
    if (minIndx !== i) {
      [dataList[i], dataList[minIndx]] = [dataList[minIndx], dataList[i]];
    }
  }
  return dataList;
}

const dataList = [43, 21, 40, 18, 25, 24, 47, 8, 5, 35];
console.log(selectionSort(dataList));
