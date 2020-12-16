

'use strict';

// Напиши класс User для создания пользователя со следующим свойствами:

class User {
    constructor (name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

//---------------- Mango
const mango = new User('Mango', 2, 20);
console.log(mango);

mango.getInfo(); //--- вызвали ф-ю


//--------------- Polly
const poly = new User('Poly', 3, 17);
console.log(poly);

poly.getInfo(); //--- вызвали ф-ю