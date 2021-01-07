// getter함수 setter함수

const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b
   }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
// 특정 값을 조회하려고 할때 실행되는 함수

const dog = {
    _name: '멍멍이',
    set name(value){
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }   
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);

// 특정 값을 설정할때마다 실행되는 함수