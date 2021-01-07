// 삼항 연산자 

const array = [];
let text = '';
if (array.length === 0) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);


/////////////////////////////////

let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

// 위에서 0 앞에 ? 는 ture라는 뜻으로 true일때는 배열이 비어있습니다가 출력되고 아닌면 : 가 출련된다.