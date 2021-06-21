"use strict";

const CHINA = [100, "Китай"];
const CHILI = [250, "Чили"];
const AUSTRIA = [170, "Австрия", "Австрию"];
const INDIA = [80, "Индия", "Индию"];
const YAMAIKA = [120, "Ямайка", "Ямайку"];

let inputCountry = prompt("В какую страну доставить товар?");
inputCountry = inputCountry.toLowerCase();

switch (inputCountry) {
    case CHINA[1].toLowerCase():
        console.log(`Доставка в ${CHINA[1]} будет стоить ${CHINA[0]} кредитов`);
        break;

    case CHILI[1].toLowerCase():
        console.log(`Доставка в ${CHILI[1]} будет стоить ${CHILI[0]} кредитов`);
        break;

    case AUSTRIA[1].toLowerCase():
        console.log(`Доставка в ${AUSTRIA[2]} будет стоить ${AUSTRIA[0]} кредитов`);
        break;

    case YAMAIKA[1].toLowerCase():
        console.log(`Доставка в ${YAMAIKA[2]} будет стоить ${YAMAIKA[0]} кредитов`);
        break;

    default:
        alert(`В вашей стране доставка не доступна`);
}