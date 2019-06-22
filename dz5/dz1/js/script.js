// Поменял картинку
document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

let title = document.querySelector('.title');


// Изменил содержимое
title.innerHTML = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');

var menuItem = document.querySelectorAll('.menu-item');

let header = document.querySelector('header');

let column = document.querySelectorAll('.column');

let promptss = document.querySelector('.prompt');

let menu = document.querySelector('.menu');


// Поменял местами элементы
menu.insertBefore(menuItem[2], menuItem[1]);

let fiveItem = document.querySelector('.menu-item');


// Удалил рекламу
column[1].removeChild(adv);

let fiveElem = document.createElement('li');

fiveElem.classList.add('menu-item');


// Добавил пятый элемент меню
fiveElem.innerHTML = 'Пятый элемент';

console.log(fiveElem);


// Прибавил к меню пятый элемент
menu.appendChild(fiveElem);


let ans = prompt('Ваше отношение к технике apple:', '');


// Ввел в поле значение пользователя
promptss.innerHTML = ans;
