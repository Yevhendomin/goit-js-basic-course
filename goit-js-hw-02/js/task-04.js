"use strict";

const formatString = function(string) {
    const isStringLonger = string.length > 40;
    return isStringLonger ? `${string.slice(0, 39)}...` : string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);
// вернется форматированная строка