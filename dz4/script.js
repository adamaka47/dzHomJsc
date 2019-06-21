let
	money,
	name,
	time,
	price;

function start() {
	money = prompt('Ваш бюджет?', '');
	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 24
}

// start();

var myList = {
	budget: money,
	shopName: name,
	employers: {},
	shopGoods: [],
	open: false,
	discount: false,
	shopItems: [],
	choose: function choose() {
		for (let i = 0; i < 5; i++) {
			let ans = prompt('Какой тип товаров будем продавать?');
			if ((typeof(ans)) === 'string' && (typeof(ans)) != null && ans != '' && ans.length < 50) {
				myList.shopGoods[i] = ans
			} else {
				i = i - 1
			}
		}
	},
	works: function works(time) {
		if (time < 0) {
			alert('Ты шутишь)0')
			} else if (time >= 8 && time < 21) {
				alert('Проходи братик');
				myList.open = true;
				} else if (time < 24) {
					alert('Поздно(9')
					} else {
						alert('Хватит рофлов!')
						}
	},
	days: function days() {
		alert('Ежедневный бюджет: ' + myList.budget / 30);
	},
	discounts: function discounts() {
		if (myList.discount == true) {
			price *= 0.8;
		}
	},

	employerses: function employerses() {
		for (let i = 1; i < 4; i++) {
			let nameses = prompt('Ваше имя');
			myList.employers[i] = nameses;
		}
	},
	chooseShop: function chooseShop() {
		let items = prompt('Перечислите товары через запятую', '');
		if ((typeof(items)) === 'string' && (typeof(items)) != null && (typeof(items)) != '') {
			myList.shopItems = items.split(",");
			myList.shopItems.push(prompt('Подождите еще, ', ''));
			myList.shopItems.sort();
			} else {
				alert('Введите нормальный запрос!')
				}
		myList.shopItems.forEach(function(item) {
			alert('У нас вы можете купить: ' + item);
		});

		for (let i in myList.shopItems) {
			alert('Наш магазин включает в себя: ' +myList.shopItems[i]);
		}


	},

}

myList.chooseShop();

// 
// choose();


// works(14);



// employerses();

console.log(myList);