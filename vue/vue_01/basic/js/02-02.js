let msg = "GLOBAL"; // msg 선언 후 할당

function outer() { // 함수
  let msg = "OUTER"; // msg에 새롭게 할당
  console.log(msg);

  if (true) {
    let msg = "BLOCK"; // msg에 새롭게 할당
    console.log(msg);
  }
}

outer() // 함수 호출