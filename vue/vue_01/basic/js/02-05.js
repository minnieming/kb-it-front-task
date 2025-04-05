function addContact(name, mobile, home = "없음", address = "없음", email = "없음") { // 함수
  let str = `name=${name}, mobile = ${mobile}, home=${home}, addrress=${address}, email=${email}`; //백틱을 사용해서 값을 지정
  console.log(str);
}

addContact("홍길동", "010-222-3331") // 함수를 호출하고 매개변수 할당
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시"); // 함수 호출 후 매개변수 할당