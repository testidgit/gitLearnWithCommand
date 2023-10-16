let myName = "Purvil Raval";
const birthYear = 2003;
var fatherName = 'Yogesh Bhai';

console.log(myName);
console.log(birthYear);
console.log(fatherName);
// console.log("om")
let number = 20
let number2 = 25
number--
number--
number--
number--

// number=number-1
number++
number++
number++
number++
// number++
// number++

console.log(number)
console.log(number + number2)
console.log(number2 - number)
console.log(number2 / number)
console.log(number2 * number)

console.log(number === number2)
console.log(number > number2)
console.log(number < number2)

let one = true
let two = false
let three = false
console.log(two == true)
console.log((one || two) && (two || one))

console.log(10 ** 3)

let a = 10;
let b = 20;

console.log(a, b)
a = a + b//30
b = a - b//10
a = a - b//20
console.log(a, b)

let temp = a
a = b
b = temp

console.log(a, b)

let yaster = 'sat'
let day = 'sun';
let tommorow = 'mon';
// day = prompt('enter value of day')
if (yaster === 'sat' && day === 'sun') {
  console.log(tommorow)
} else if (day === 'sun' && tommorow === 'mon') {
  console.log(yaster)
} else {
  console.log('error')
}

let age = 18
let ans = (age >= 18 ? 'you can get driving licence' : 'you can not get driving licence')
console.log(ans)


// let dayNumber = prompt('Enter day number:')
let dayNumber = '1'
switch (dayNumber) {
  case 1:
    console.log('mon');
    break;
  case '2':
    console.log('tue')
    break;
  case '3':
    console.log('wed')
    break;
  case '4':
    console.log('thu')
    break;
  case '5':
    console.log('fri')
    break;
  case '6':
    console.log('sat')
    break;
  case '7':
    console.log('sun')
    break;
  default:
    console.log('HollyDay');
    break;
}


let num = 1

// WHILE LOOP
while (num <= 10) {
  console.log(num * 2)
  num++
}
num = 1
// DO WHILE LOOP
do {
  console.log(num * 4)
  num++
} while (num <= 10) //THIS LOOP ONE EXTRA TIME RUN RATHER THEN ONE


// FOR LOOP
for (let i = 1; i <= 10; i++) {
  console.log(i * 8)
}

