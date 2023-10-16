// OBJECT
const purvil = {
  firstName: 'Purvil',
  sureName: 'Raval',
  mobileNo: 1234567890,
  fullName() {
    console.log(`${this.firstName} ${this.sureName}  ${this.mobileNo}`)
  },
  purvilsFrind: {
    firstName: 'Purvi',
    sureName: 'Raval',
    fullName() {
      return (`${this.sureName} ${this.firstName}  ${this.mobileNo}`)
    },
  }

}
const num = [1, 2, 3, 4, 5, 6, 7, 8]
for (const item of num) {
  console.log(item)
}
console.log(purvil)
console.log(purvil.firstName)
console.log(purvil.sureName)
console.log(purvil.purvilsFrind.firstName)
console.log(purvil.purvilsFrind.fullName())
purvil.fullName()
console.log(typeof (purvil))
document.querySelector('.show').addEventListener('click', function () {
  document.querySelector('.window').classList.toggle('hidden')
})