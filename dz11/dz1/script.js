// let options = {
// 	width: 1366,
// 	height: 768,
// 	font: {
// 		size: '16px',
// 		color: '#fea100'
// 	}
// }

// console.log(JSON.stringify(options));

// console.log(JSON.parse(JSON.stringify(options)));

let request = new XMLHttpRequest();
// 1) Создаем объект запроса

request.open('GET', 'server.php', true, user, password);
// 2) Настроили наш запрос

request.send();
// 3) Отправили наш запрос

request.status
// Статус 

request.statusText

request.responseText

request.readyState
// 
