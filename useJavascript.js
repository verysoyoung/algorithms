let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);

let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
console.log(sum);

const sum2 = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);
console.log(sum2);

//배열 내 같은 요소 제거
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
console.log(uniqueNamesWithArrayFrom);
console.log(uniqueNamesWithSpread);

//Spread 연산자를 이용한 객체 병합
const person = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
};

const company = {
  name: "Cobalt. Inc.",
  address: "Seoul",
};

const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup);

/// ||
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당
const participantName = 0;
const name = participantName || "Guest";

/// &&
// flag가 true일 경우에만 실행
const flag = true;
function func() {
  console.log("true && func()");
}
flag && func();

// 객체 병합에도 이용가능!
const makeCompany = (showAddress) => {
  return {
    name: "Cobalt. Inc.",
    ...(showAddress && { address: "Seoul" }),
  };
};
console.log(makeCompany(false));
// { name: 'Cobalt. Inc.' }
console.log(makeCompany(true));
// { name: 'Cobalt. Inc.', address: 'Seoul' }
