let answer = 0
let remain = 12
let flag = false
while (remain >= 0) {
  if (remain === 0 || remain % 5 === 0) {
    answer += parseInt(remain / 5) //5로 나눈 몫을 더하기
    console.log(answer)
    flag = true
    break
  }
  remain -= 3
  answer += 1
}
if (!flag) {
  console.log(-1)
}

//3A+5B = N
//B가 가장 큰 경우를 찾는 것 === 가장 작은 A를 찾는 것
