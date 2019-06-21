var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

week[5] = week[5].bold();


week[6] = week[6].italics();


for (let i = 0; i < 7; i++) {
	week[i]= week[i] + '\n';
}

alert(week);

console.log(week);

var arr = [];

for (let i = 1; i < 8; i++) {
	arr[i] = i*100 + i;
	var m = arr[i];
	while (m > 9) {
		m = m / 10
		m = parseInt(m);
	}
	if (m === 3 || m === 7) {
		alert(arr[i]);
	}

}
