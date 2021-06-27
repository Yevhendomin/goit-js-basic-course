"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: NaN,
            amount,
            type,
        };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        transaction.id = `id-${this.transactions.length + 1}`;
        this.transactions.push(transaction);
        this.balance += amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
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

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].id == id) {
                return this.transactions[i];
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
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
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

 */