// 화살표 함수
//차이점! function에서 말하는 this 값과 화살표함수 this랑은 다르다
const add = (a , b) => a + b;

const sum = add(1,2);
console.log(sum);
