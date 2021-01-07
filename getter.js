const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;

    },
    get a () {
        return this._a;
    },
    get b () {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;              // numbers.a 로 5로 설정하게 될때 set 함수가 실행되면서 
                            // 5라는 값이 set a(value)로 들어가게 되고 this.calulate()가 실행되서
                            // calculate가 나온다.