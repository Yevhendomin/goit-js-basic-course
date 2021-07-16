"use strict";

const Account = function(login, email){
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function(){
  console.log(`Login is ${this.login}, Email is ${this.email}.`);
}

const musk = new Account('elon', 'elonmusk@spacex.com');
musk.getInfo();
const james = new Account('jambo', 'jameshatfield@metallica.com');
james.getInfo();


/* 

ЗАДАНИЕ 1:

Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
В prototype функции-конструктора добавь метод getInfo(), 
который выводит в консоль значения полей login и email объекта который его вызвал.

 */
