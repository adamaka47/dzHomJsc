// let name = 'Adam',
// 	 age = 19,
// 	 mail = 'ya@ya.ru';

// document.write('Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}');


// function makeArr() {
// 	var items = [];
// 	for (var i = 0; i < 10; i++) {
// 		var item = function() {
// 			console.log(i);
// 		}
// 		items.push(item);
// 	}

// 	return items;
// }

// var arr = makeArr();

// arr[1]();

// arr[5]();


// function makeArr() {
// 	let items = [];
// 	for (let i = 0; i < 10; i++) {
// 		let item = function() {
// 			console.log(i);
// 		}
// 		items.push(item);
// 	}

// 	return items;
// }

// let arr = makeArr();

// arr[1]();

// arr[5]();

// let fun = () => {
// 	console.log(this);
// }

// fun();

// let obj = {
// 	number: 5,
// 	sayNumber: function() {
// 		let say = () => {
// 			console.log(this)
// 		}
// 		console.log(this)
// 		say();
// 	}
// }

// obj.sayNumber();

// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
// 	let shows = () => {
// 		console.log(this);
// 	}
// 	shows();
// });


// function calc(num, basis = 2) {
// 	console.log(num * basis);
// }

// calc(3, 5);

// class rect {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	calcArea() {
// 		return this.width * this.height;
// 	}
// }

// const square = new rect(10, 40);

// console.log(square.calcArea());


class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.style.backgroundColor = bg;
		this.style.fontSize = fontSize;
		this.style.textAlign = textAlign;
	}
	newElem() {
		return btn;
	}
}

const ret = new options(10, 40);

ret.newElem();