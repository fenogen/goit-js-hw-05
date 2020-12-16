

'use strict';


const Account = function (login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  return console.log(`Login: ${this.login}, Email: ${this.email}`);
}


console.log(Account.prototype.getInfo); // function

//---------------- Account Mango
const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango);

mango.getInfo();

//--------------- Account Polly

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly);

poly.getInfo();
