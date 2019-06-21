var shopMoney = +prompt('Ваш бюджет?', "20000");
var shopName = prompt('Название вашего магазина?');
var shopGoods = [];
var shopEmployers  = ['Adam', 'Ruslan', 'Miha'];
var ans1 = prompt('Какой тип товара будет продавать?');
var ans2 = prompt('Какой тип товара будет продавать?');
var ans3 = prompt('Какой тип товара будет продавать?');


var mainList = {
	money: shopMoney,
	name: shopName,
	goods: shopGoods,
	employers: shopEmployers,
	open: true
}

shopGoods[0] = ans1;
shopGoods[1] = ans2;
shopGoods[2] = ans3;

console.log(shopGoods);

alert(shopMoney / 30);




