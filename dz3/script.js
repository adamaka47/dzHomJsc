// let
// 	money,
// 	name,
// 	time

// function start() {
// 	money = prompt('Сколько денег имеется?');
// 	console.log(money);

// 	while (isNaN(money) || money == '' || money == null) {
// 		money = prompt('Сколько денег имеется?');
// 	}

// 	name = prompt('Введите название магазина');
// 	time = 24;
// }

// start();

// let myList = {
// 	allMoney: money,
// 	shopName: name,
// 	shopGoods: [],
// 	employers: {},
// 	open: true
// }

// function chooses() {
// 	for (let i = 0; i < 5; i++) {
// 		let ans = prompt('Каков тип товара?');
// 		if ((typeof(ans)) === "string" && (typeof(ans)) != null && ans != '' && ans.length < 50) {
// 			console.log('Успешно');
// 			myList.shopGoods[i] = ans;
// 		} else {
// 			console.log('Безуспешно!');
// 		}
// 	}
// }

// chooses();


// function works(time) {
// 	if (time < 0) {
// 		console.log('Невозможно');
// 		} else if (time >= 8 && time < 20) {
// 			console.log('Должно работать...')
// 			} else if (time < 24) {
// 				console.log('Вы опоздали...')
// 				} else {
// 					console.log('Это нереально(')
// 					}
// }

// works(9);


// console.log(myList.shopGoods);

// alert(myList.allMoney / 30);

// console.log(myList);





// NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEW


let
	money,
	name,
	time

function start(discount) {
	money = prompt('Сколько денег имеется?');
	console.log(money);
	if (discount) {
		money *= 0.8;
		console.log(money);
	}

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Сколько денег имеется?');
		if (discount) {
			money *= 0.8;
			console.log(money);
		}
	}

	name = prompt('Введите название магазина');
	time = 24;
}

start(true);

let myList = {
	allMoney: money,
	shopName: name,
	shopGoods: [],
	employers: {
		name: 'Silver'
	},
	open: true,
	discount: false
}

console.log(myList.employers.name);

function chooses() {
	for (let i = 0; i < 5; i++) {
		let ans = prompt('Каков тип товара?');
		if ((typeof(ans)) === "string" && (typeof(ans)) != null && ans != '' && ans.length < 50) {
			console.log('Успешно');
			myList.shopGoods[i] = ans;
		} else {
			console.log('Безуспешно!');
		}
	}
}

chooses();


function works(time) {
	if (time < 0) {
		console.log('Невозможно');
		} else if (time >= 8 && time < 20) {
			console.log('Должно работать...')
			} else if (time < 24) {
				console.log('Вы опоздали...')
				} else {
					console.log('Это нереально(')
					}
}

works(9);


console.log(myList.shopGoods);

alert(myList.allMoney / 30);

console.log(myList);