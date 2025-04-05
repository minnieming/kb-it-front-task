// 가변 파라미터

function foodReport(name, age, ...favoriteFoods) { // 가변 파라미터로 처리
  console.log(name + "," + age);
  console.log(favoriteFoods);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기"); // 함수 호출
foodReport("홍길동", 16, "초밥");