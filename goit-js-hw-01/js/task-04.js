"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let countToBuy = prompt("Сколько дроидов вы хотите купить?");

if (countToBuy === null) {
    console.log("Отменено пользователем!");
} else {
    countToBuy = Number.parseInt(countToBuy);
    totalPrice = countToBuy * pricePerDroid;

    if (totalPrice <= credits) {
        console.log(
            `Вы купили ${countToBuy} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
        );
    } else {
        console.log("Недостаточно средств на счету!");
    }
}