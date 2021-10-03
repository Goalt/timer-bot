var parse = require('parse-duration')

let t = parse("5s")

console.log(t)

function sayHi() {
    console.log('Привет');
}

setTimeout(sayHi, t);