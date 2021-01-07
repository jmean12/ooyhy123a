//객체
const ironMan = {
    name : '토니스타그',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

function print ({alias , name , actor}) {
    const text =`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmerica);

// 객체구조분해 (비구조 할당)
