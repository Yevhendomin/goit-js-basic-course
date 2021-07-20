"use strict";
import users from "./users.js";

/* 
Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) 
выполняют следующие операции над массивом объектов пользователей из файла users.js.

ЗАДАНИЕ 1:

Получить массив имен всех пользователей (поле name).

Задание 2
Получить массив объектов пользователей по цвету глаз (поле eyeColor).

Задание 3
Получить массив имен пользователей по полу (поле gender).

Задание 4
Получить массив только неактивных пользователей (поле isActive).

Задание 5
Получить пользоваля (не массив) по email (поле email, он уникальный).

Задание 6
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

Задание 7
Получить общую сумму баланса (поле balance) всех пользователей.

Задание 8
Массив имен всех пользователей у которых есть друг с указанным именем.

Задание 9
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

 */

const getUserNames = users.map((user) => user.name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => user.gender === gender);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = (users) => {
  return users.reduce((totalSum, user) => totalSum + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) =>
    user.friends.find((friend) => friend === friendName)
  );
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = (users) => {
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

  const result = skills.reduce((uniqueSkills, skill) => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
    return uniqueSkills;
  }, []);

  return result.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
