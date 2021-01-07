// 배열의 내장함수 forEach

const mancity = [
    '아구에로', '스털링','덕배', '다비드실바'
]
function print(city) {
    console.log(city);
}

mancity.forEach(print)


///////////////////// 아래같이 쓸수도 있다.

const mancity = [
    '아구에로', '스털링','덕배','다비드실바'
]
mancity.forEach(function(city) {
    console.log(city);
})

/////////////////// 화살표 함수로 쓸수도있다
const mancity = [
    '아구에로', '스털링','덕배','다비드실바'
]
mancity.forEach(city => {
    console.log(city);
});





// 내장함수 map 

const array = [1,2,3,4,5,6,7,8];

const squared = [];
for (let i = 0; i < array.length; i++ ) {
    squared.push(array[i] * array [i]);
}
console.log(squared);


/////////////////

const array = [1,2,3,4,5,6,7,8];

const squared = n => n * n;
const squarde = array.map(n => n * n);
console.log(squared);

////////////////
//원하는 항목이 어디있는지 알려주는 함수

const mancity = ['아구에로','스털링','덕배'];
//위에서 덕배가 몇번째(원소)에 있는지 알고싶다면
const index = mancity.indexOf('덕배');
console.log(index);  
// indexOf를 쓰면 알수있다. 그러나 객체 혹은 어떤 조건을 찾는 것이라면 알수없다.

///////////////
//특정 조건에서 몇번째인지 알고싶다면 findIndex 함수를 쓰면 된다.
// find라는 함수도있는데 find 함수를 쓰게 되면 원소 결과값을 찾아준다.

// filler함수 특정조건을 만족하는 원소들을 찾아서 새로운 배열을 만드는 함수

// slpice 함수는 numbers.slpice 는 원소를 삭제하는 함수이다.

// shift() 원소를 바깥으로 꺼내는 함수이다
// pop은 원소의 마지막순서부터 바깥으로 꺼낸다.
// unshift는 맨앞부터 원소를 추가하는 함수 push는 맨뒤부터 원소를 추가한다.

//concat함수 여러개의 배열을 하나로 합쳐주는 역할을 한다.
//
//reduce

const numbers =[1,2,3,4,5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//위에서 0은 초기값으로 accumulator로 시작하게되고 current 는 원소1이 들어오고 작동이 시작된다.

//////////
//reduce 다른 예시//
const alphabets = ['a','a','a','b','c','c','d','e'];
alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] +=1;
    } else {
        acc[current] =1;
    }
    return acc;
},   {})

console.log(counts);