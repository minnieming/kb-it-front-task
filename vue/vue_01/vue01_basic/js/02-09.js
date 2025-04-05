// 화살표 함수

const test1 = function (a, b) { // 익명함수
  return a + b;
}

const test2 = (a, b) => { // 화살표 함수
  return a + b;
}

const test3 = (a, b) => a + b; // 한줄일때 화살표 함수는 괄호와 return 생략 가능

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));