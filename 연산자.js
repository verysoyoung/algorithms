let a = 10
let b = 10
let c = 10
let d = 10
let e = 10

a += 3 //왼쪽 변수에 오른쪽 값을 더한다.
b -= 3 //왼쪽 변수에 오른쪽 값을 뺀다.
c *= 3 //왼쪽 변수에 오른쪽 값을 곱한다.
d /= 3 //왼쪽 변수를 오른쪽에 있는 값으로 나눈다.
e %= 3 //왼쪽 변수에 오른쪽으로 나눈값으로 나눈 나머지를 대입한다.

console.log('+= %d -= %d  *= %d  /= %d  %%= %d\n', a, b, c, d, e)
