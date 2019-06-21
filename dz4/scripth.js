// let options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024
// }

// options.bool = false;
// options.colors = {
// 	border: 'black',
// 	background: 'red'
// }

// delete options.bool;

// for (let i in options) {
// 	console.log('Свойство ' + i + ' имеет значение ' + options[i])
// }

// console.log(options);

// console.log(Object.keys(options).length);

// let first = [1, "second",3,4,5];

// arr.pop(); // удаляет последний элемент

// arr.push(6) // добавляет элемент

// arr.shift() // удаляет первый элемент

// arr.unshift(0) // прибавляет элемент в начало


// for (let i = 0; i < arr.length; i++) {
// 	alert(arr[i]);
// }


// first[99] = 99;
// console.log(arr.length) // выведет 100

// first.forEach(function(item, i, arr) {
// 	console.log(i + ": " + item + "(массив: " + arr + ")");
// })


// Сортировка буков
// let first = ['qq', 'aa', 'bb'];
// let i = first.sort();
// console.log(first);



// let first = [2, 5, 12];

// Сортировка чисел
// function sortNum(a, b) {
// 	return a - b;
// }

// let i = first.sort(sortNum);
// console.log(first);


// let sold = {
// 	health: 400,
// 	armor: 100
// }

// let john = {
// 	health: 100
// }

// john.__proto__ = sold;

// console.log(john);
// console.log(john.armor);