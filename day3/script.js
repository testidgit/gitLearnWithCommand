

//ARRAY
let friends = ['Raju', 'Yogo', 'Vanu', 'Naru']
console.log(friends)
// console.log(friends[1])
// console.log(facl.concat(friends))
// facl.push('Shubhash')
// facl.pop()
// console.log(facl)

// console.log(facl[1][0])
// console.log(friends.length)
// console.log(friends[friends.length - 1])
//simple for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }
//for in
// for (const item of friends) {
//   console.log(item)
// }
//for of
function colorDe(colorName) {
  console.log(`This color function: ${colorName}`)
}//function declaraatio
colorDe('Red')
const colorEx = function (colorName) {
  console.log(`This color function: ${colorName}`)
}
colorEx('Green')
const colorAr = colorName => { console.log(`This color function: ${colorName}`) }
colorAr('Brown')

const arrFunction = (n1, n2) => { return n1 + n2 }
const arrFunction2 = (n1, n2) => n1 + n2
console.log(arrFunction(2, 8))
console.log(arrFunction2(2, 8))
// arrFunction(2, 8)


let facl = ['Aaju', 'Ketan', 'Tarun', 'Dhruva', 'Dhrulo']
let inum = Math.round(facl.length / 2)
facl.splice(3, 0, 'purvil')
console.log(facl)
// console.log(inum)
// facl[inum] = 'Purvil'
facl.unshift('VARUN')
facl.shift()
console.log(facl)
// facl.forEach((value, index, array) => {
//   console.log(index + 1, value)
// })
// facl.forEach(function (value) {
//   console.log(value)
//   // console.log(array)
// })
// // array=[]
// let array = null
// console.log(array)
// // const b
const month = ['january', 'F', 'M', 'A', 'july', 'May']
const inOfJuly = month.indexOf('july')
console.log(inOfJuly)
month[inOfJuly] = 'July'
console.log(month)
const a = 1;
const b = (a === 2) ? true : false
console.log(b)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// Map
console.log(numbers.map(function (item) {
  return item * 4
}))
// filter
console.log(numbers.filter(item => {
  return item % 2 === 0
}))
//reduce
console.log(numbers.reduce(function (cur, item) {
  return cur + item
}, 0))
