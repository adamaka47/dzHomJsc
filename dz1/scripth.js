var num = 33721;

num = parseInt(num);
endNum = 1;

while (num > 1) {
	var dig = num % 10
	dig = parseInt(dig);
	endNum = endNum * dig;
	num = num / 10
}

console.log(endNum);

alert(endNum ** 3);
