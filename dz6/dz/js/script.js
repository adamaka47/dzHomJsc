let btn = document.querySelector('#open-btn');

let allNames = document.querySelector('.name');

let allNamesVal = document.querySelector('.name-value');

let allBudget = document.querySelector('.budget');

let allBudgetVal = document.querySelector('.budget-value');

let allItems = document.querySelector('.items');

let allItemsVal = document.querySelector('.items-value');

let allEmp = document.querySelector('.employers');

let allEmpVal = document.querySelector('.employers-value');

let allDisc = document.querySelector('.discount');

let allDiscVal = document.querySelector('.discount-value');

let allPen = document.querySelector('.isopen');

let allPenVal = document.querySelector('.isopen-value');

let input1 = document.querySelector('#goods_1');

let input2 = document.querySelector('#goods_2');

let input3 = document.querySelector('#goods_3');

let input4 = document.querySelector('#goods_4');

let btns = document.getElementsByTagName('button');

let inputCat = document.querySelectorAll('.goods-item');

let allGoodsVal = document.querySelector('.goods-value');

let timeInp = document.querySelector('.time-value');

let moneyInp = document.querySelector('.count-budget-value');

let moneyBtn = document.querySelector('.count-budget-btn');

let chooseItem = document.querySelector('.choose-item');

let namesInp = document.querySelectorAll('.hire-employers-item');

let
	money,
	price;

btns[1].style.backgroundColor = 'pink';

btns[0].style.border = 'none';

btns[0].style.padding = '20px';

btns[3].style.border = '9px solid red';



btn.addEventListener('click', () => {
	money = prompt('Ваш бюджет?', '');
	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	allBudgetVal.textContent = money;
	allNamesVal.textContent = prompt('Название вашего магазина?', '').toUpperCase();
});

// start();


btns[1].addEventListener('click', () => {
	for (let i = 0; i < inputCat.length; i++) {
		let ans = inputCat[i].value;
		if ((typeof(ans)) === 'string' && (typeof(ans)) != null && ans.length < 50) {
			myList.shopGoods[i] = ans;
			allGoodsVal.textContent = myList.shopGoods;
		} else {
			i = i - 1
		}
	}
});

chooseItem.addEventListener('change', () => {

	let items = chooseItem.value;

	if (isNaN(items) && items != '') {
		myList.shopItems = items.split(", ");
		myList.shopItems.sort();
		} 	

		allItemsVal.textContent = myList.shopItems;

	});

timeInp.addEventListener('change', () => {
	var time = timeInp.value;
	if (time < 0) {
		alert('Ты шутишь)0');
		myList.open = false;
		} else if (time >= 8 && time < 21) {
			alert('Проходи братик');
			myList.open = true;
			} else if (time < 24) {
				alert('Поздно(9');
				myList.open = false;
				} else {
					alert('Хватит рофлов!');
					myList.open = false;
					}
	if (myList.open) {
		allDiscVal.style.background = 'green'
	} else {
		allDiscVal.style.background = 'red'
	}
});


moneyBtn.addEventListener('click', () => {
	if (myList.discount) {
		moneyInp.value = parseInt((money / 30) * 0.8);
	} else {
		moneyInp.value = money / 30;
	}
});

btns[3].addEventListener('click', () => {
	for (let i = 0; i < namesInp.length; i++) {
		let nameses = namesInp[i].value;
		myList.employers[i] = nameses;

		allEmpVal.textContent += myList.employers[i] + ', ';

	}
});


const myList = {
	budget: money,
	shopName: name,
	employers: {},
	shopGoods: [],
	open: false,
	discount: true,
	shopItems: [],
}


console.log(myList);








