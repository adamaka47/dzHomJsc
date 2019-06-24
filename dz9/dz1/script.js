// function user(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		alert('Hello' + this.name);
// 	}
// };

// user.prototype.exit = function(name) {
// 	alert('User ' + this.name + ' покинул нас');
// }

// let adam = new user('adam', 19);
// let loh = new user('loh', 18);

// console.log(adam);
// console.log(loh);

// adam.exit();

// 1) Просто вызов функции - window/undefined
// 2) Функция как метод - this = объект
// 3) Функция как конструктор (new) - this = созданный только что объект
// 4) Ручное присвоение this любой функции - указание конкретного контекста - call, apply, bind

// let user = {
// 	name: 'Adam'
// }

// function writeName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// };

// console.log(writeName.call(user, ' Johnson'));
// console.log(writeName.apply(user, [' Johnson']));


// bind

// function count(num) {
// 	return this*num;
// };

// let twoS = count.bind(2);

// console.log(twoS(10))

// DOM Practice

// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', () => {
// 	this.style.color = 'red'
// });


// Bags

// 'use strict'

// let num = 4;
// console.log(num);

// function shows(ab, cd) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return ab + cd
// 	}
// 	console.log(sum());
// };

// shows(3, 5);

// let obj = {
// 	a: 20,
// 	b: 40,
// 	summ: function() {
// 		function shut() {
// 			console.log(this);
// 		}
// 		shut();
// 	}
// }

// obj.summ();