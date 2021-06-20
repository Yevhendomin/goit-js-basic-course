'use strict';

const total = 100;
let ordered = 49;

if (total - ordered >= ordered) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
} else {
    console.log('На складе недостаточно твоаров!')
}

ordered = 1;

if (total - ordered >= ordered) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
} else {
    console.log('На складе недостаточно твоаров!')
}

ordered = 51;

if (total - ordered >= ordered) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
} else {
    console.log('На складе недостаточно твоаров!')
}