// JavaScript module //
// export / import해서 파일들을 연결해서 사용하게 해주는 기능으로 JS 파일들을 쪼개고 재사용 할 수 있다.
// JS 파일에 export / import가 있다면 -> 모듈 파일

let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
const getBase = () => base;

// export { add, multiply };
export { add };
export { multiply };
export default getBase; // export default : 한 모듈에서 하나의 기본값을 외부로 보내는 방식. getBase가 이 모듈의 기본값이 된다. 