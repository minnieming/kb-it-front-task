import getGuitar, { add, multiply } from './modules/02-19-module.js'; // JS 파일에 import가 있다면 -> 모듈
// getBase를 export default로 지정했기 때문에 {} 필요없음 & getBase가 아닌 다른 이름으로 설정해도 된다

console.log(add(4));
console.log(multiply(5));
console.log(getGuitar());