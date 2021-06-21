"use strict";

let input = 0;
let total = 0;

input = prompt("Введите число и я его прибавлю к общей сумме");

while (input != null) {
    total = total + Number.parseInt(input);
    input = prompt("Введите число и я его прибавлю к общей сумме");
}

alert(`Общая сумма чисел равна ${total}`);