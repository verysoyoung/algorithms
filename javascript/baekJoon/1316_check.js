//a-z 까지 총 26개의 알파베잇 있다.
//각 알파벳에 대하여 연속해서 등장한 횟수가 1번인지 체크한다.

//그룹 단어인지 체크하는 함수
const input = 'ccazzzzbb'
function check(data) {
  let setData = new Set(data[0])
  for (let i = 0; i < data.length - 1; i++) {
    //오른쪽 단어와 다르다면
    if (data[i] !== data[i + 1]) {
      //이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false
      } else {
        setData.add(data[i + 1])
      }
    }
  }
  return true
}
console.log(check(input))
