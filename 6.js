const numbers = [10,20,30,40,50];

for (let number of numbers) {
    console.log(number);
}



// for of 는 배열안에 있는것들을 사용하여 작업할때 사용

const doggy = {

    name : '멍멍이',
    sound : '멍멍',
    age : 2
};
for (let key in doggy) {
    console.log(`${key}:${doggy[key]}`);
}

/*
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.value(doggy));
*/

