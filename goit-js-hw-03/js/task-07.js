"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: NaN,
      amount,
      type,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    transaction.id = `id-${this.transactions.length + 1}`;
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      transaction.id = `id-${this.transactions.length + 1}`;
      this.transactions.push(transaction);
      this.balance -= amount;
    } else {
      console.log("Недостаточно средств!");
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id == id) {
        return this.transactions[i];
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        total += this.transactions[i].amount;
      }
    }
    return total;
  },
};

account.deposit(500);
account.deposit(200);
account.deposit(350);
console.log(account.balance);
account.withdraw(480);
console.log(account.balance);
console.table(account.transactions);

/* 

ЗАДАНИЕ 7:

Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы 
для работы с балансом и историей транзакций.


 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 * Каждая транзакция это объект со свойствами: id, type и amount
 * 
 *    1. Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   
 *    2. Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   * 
*     3. Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   * 
   * 4. Метод возвращает текущий баланс
   * 
   * 5. Метод ищет и возвращает объект транзации по id
   * 
   * 6. Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
 
 */
