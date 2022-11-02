// Modules = Encapsulates coed (shares minimumly)
// Every  file is a module.
const {
    daughter,
    mother,
    title,
    location
} = require('./module-names')
const { sayHi } = require('./utils')

// console.log(names);

sayHi('Kevin')
sayHi(location)
sayHi(title)