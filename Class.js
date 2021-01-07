
class Animal {
    constructor(type, name ,sound) {   //constructor 객체 생성자 함수
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}
class Dog extends Animal {       // 여기서 extends라는 클래스가 특정 소속을 상속받는다라는 의미
    constructor(name,sound) {
        super('개',sound,name);
    }
}

class cat extends Animal {
    constructor(sound,name){
        super('고양이',sound,name);
    }
}

const dog = new Dog('멍멍이','멍멍');
const Cat = new cat('고양이','야옹');
const Cat2 = new cat('하우하우', '야오옹');

dog.say();
cat.say();

//////////////////////////////////////
//////////////////////////////////////

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brand.push(brand)
    }
    print() {
        console.log(`${this.name}을 파는 음식점들:`)
        console.log(this.brands.join(', '))    
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

pizza.print();


// new Food('피자')가 선언이 피자가 constructor(name)으로 들어오게된다.
