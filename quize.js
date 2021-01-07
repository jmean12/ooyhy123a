
//내장함수 퀴즈 
function countBiggerThanTen(numbers) {
     
}

const count = countBiggerThanTen([1,2,3,4,5,10,20,30,40,50,60]);
console.log(sum);

//////////////////////////////////////////////////////////
function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  

  ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
  function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    let count = 0;
    numbers.forEach(n => {
      if (n > 10) {
        count++;
      }
    });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  