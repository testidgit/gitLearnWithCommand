// FUNCTION DECLARATION
function greet(name1, name2) {
  // return name + ' good morning'
  console.log(name1 + ' good morning')
  console.log(name2 + ' good morning')
}
// console.log(greet('Purvil'))
greet('Purvil', 'Yogesh')
function evenNubCheck(number) {
  if (number % 2 === 0) {
    console.log('even')
  } else { console.log('odd') }
}
// const numInput = Number(prompt('Enter any number :'))
// const numInput = prompt('Enter any number :')//'2'

// evenNubCheck(numInput)
evenNubCheck(2)
// evenNubCheck(Number(prompt('Enter any number :')))


function tableOf(num) {
  for (let i = 1; i <= 10; i++) {
    // console.log(num + '❌' +   i + '=' + num * i)
    console.log(`${num} ❌ ${i} = ${num * i}`)
  }
  return 'finish'
}
function number(num) {
  return ++num
}
let nextNum = number(10)
console.log(nextNum)
let tabalOfSix = tableOf(6)
console.log(tabalOfSix)

const greetNew = (nameOfperson) => {
  return nameOfperson
}
console.log(greetNew('Purvil'))


const mul = (n, m) => { return n * m }
console.log(mul(5, 2))

//ARRAY
let friends = ['Raju', 'Yogo', 'Vanu', 'Naru']
let facl = [['Aaju', 'Ketan'], ['Tarun', 'Dhruva'], 'Dhrulo']
console.log(friends)
// console.log(friends[1])
// console.log(facl.concat(friends))
// facl.push('Shubhash')
// facl.pop()
console.log(facl)

console.log(facl[1][0])

