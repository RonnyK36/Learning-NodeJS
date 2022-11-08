// Modules = Encapsulates coed (shares minimumly)
// Every  file is a module.
const {
    daughter,
    mother,
    title,
    location
} = require('./module-names')
const { sayHi } = require('./utils')
const data = require('./alternative-export')

// console.log(names);

sayHi('Kevin')
sayHi(location)
sayHi(title)
console.log(data);