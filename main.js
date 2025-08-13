// if statement

const x = 6;
const y = 11;

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10')
}
    
//terniary


const X = 11; // X = 9; the answer will be blue)

const color = X > 10 ? 'red' : 'blue'; // when const color = 'green' , answer is not any atall

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is red');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//functions
function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(5,6)

function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2)
}

addNums()

// most times you dont use console in function , you use return
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 5));

//assignment multiplication table

for (let i = 1; i <=10; i++);
    let tableof = 3;

   console.log (`${tableof} * ${i} = ${tableof * i}`)