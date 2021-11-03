const person = require('./utils/People')

person.map(adult => {
  if (adult.age >= 18) {
    console.log(`Welcome ${adult.name} you have: ${adult.age} years old.`)
  } else {
    console.log(`Go bed ${adult.name}, you have ${adult.age} years old.`)
  }
})

