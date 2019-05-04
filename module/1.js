var module2 = require('./2');
var People = require('./3');


console.log(module2.msg);
console.log(module2.bar);
module2.showBar();

var jay = new People('jay', 'male', '28');
jay.sayHello();