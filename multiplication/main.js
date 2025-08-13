
//multiplication table

function multiplication(){ 
 for (let i =1; i <=12; i++) {
  console.log('');
  console.log("");
  for (let j = 1; j <= 12; j++){
    let num = i * j;
     console.log (`${i} x ${j} = ${num}`);  
  }
  console.log("");
  console.log("");
}
}

multiplication(1, 12, 10);


/*

//array
numbers 1 - 100

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//filter even num
let numbers = ('i = 1; i <=100; i++');
let evenNumbers = numbers.filter;
 
const odd = function(){
    oddNumber = []
    let sum = 0
    for (let i = 1; i <= 100; i+=2){
        oddNumber.push(i)
        sum += 1
    }
    console.log(oddNumber);
        console.log(sum);
}
odd()

const even = function(){
    evenNumber = []
    let sum = 0
    for (let i = 1; i <= 100; i++){
        if(i % 2 ===0 ){
        evenNumber.push(i);
        sum += 1
        }
    }
    console.log(evenNumber);
        console.log(sum);
}
even()

*/

//prime numbers

/*
 function prime(num) {
  if (num < 1) return false;
  if (num === 2) return true;
  sqrt = math.sqrt(num);
  for  (let i = 2;  i <= 100; i++){
    if ((num % i) === 0) return false;
  }
  return true;
} 


/*
function primeNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++){
    if ('prime(let i = 1)') {
      sum += 1;
    }
  }
  return sum;
}

let sum = primeNumbers(1 , 100);
console.log(sum);
*/

function factor(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
    return result;
}

  let factors = 5;
  console.log(factor(factors));

  let facts = 3;
  console.log(factor(facts));