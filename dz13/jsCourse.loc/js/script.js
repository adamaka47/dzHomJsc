window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info = document.getElementsByClassName('info-header')[0];

	function hideTabCont(act) {
		for (let i = act; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabCont(1);

	function showTabCont(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabCont(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show')
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className === 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target === tab[i]) {
					showTabCont(i);
					break;
				}
			}
		}
	});

	// TImer


	function getTimeRemaining(endtime) {
	      let t = Date.parse(endtime) - Date.parse(new Date());
	      let seconds = Math.floor((t / 1000) % 60);
	      let minutes = Math.floor((t / 1000 / 60) % 60);
	      let hours = Math.floor((t / (1000 * 60 * 60)));
	      return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	      };
	    };
	    function setClock(id, endtime) {
	      let clock = document.getElementById(id);
	      let hoursText = clock.querySelector('.hours');
	      let minutesText = clock.querySelector('.minutes');
	      let secondsText = clock.querySelector('.seconds');

	      function upClock() {
	        let t = getTimeRemaining(endtime);

	        hoursText.innerHTML = ('0' + t.hours).slice(-2);
	        minutesText.innerHTML = ('0' + t.minutes).slice(-2);
	        secondsText.innerHTML = ('0' + t.seconds).slice(-2);

	        if (t.total <= 0) {
	          clearInterval(timeinterval);
	        }
	      }

	      upClock();
	      let timeinterval = setInterval(upClock, 1000);
	    }
	    let deadline = new Date('2020-06-23T20:32:00');
	    setClock('timer', deadline);

	    // Modal

	    let btnShadow = document.querySelector('.more');
	    let overlay = document.querySelector('.overlay');
	    let close = document.querySelector('.popup-close');

	    btnShadow.addEventListener('click', function() {
	    	this.classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	    });

	    close.addEventListener('click', function() {
	    	overlay.style.display = 'none';
	    	btnShadow.classList.remove('more-splash');
	    	document.body.style.overflow = 'visible';
	    });

	    let message = new Object();
	    message.loading = 'Загрузка...';
	    message.success = 'Спасибо, скоро мы свяжемся с вами';
	    message.failure = 'Что-то пошло не так...';

	    let form = document.getElementsByClassName('main-form')[0];
	    let input = form.getElementsByTagName('input');
	    let statusMessage = document.createElement('div');
	    statusMessage.classList.add('status');

	    form.addEventListener('submit', function(event) {
	    	event.preventDefault();
	    	form.appendChild(statusMessage);


	    	// ajax

	    	let request = new XMLHttpRequest();
	    	request.open('POST', 'server.php');

	    	// Правильная кодировка
	    	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	    	let formData = new FormData(form);

	    	request.send(formData);

	    	request.onreadystatechange = function() {
	    		if (request.readyState < 4) {
	    			statusMessage.innerHTML = message.loading;
	    			} else if (request.readyState === 4) {
	    				if (request.status === 200 && request.status < 300) {
	    					statusMessage.innerHTML = message.success;
	    					// добавляем контент на страницу
	    					}
	    				} else {
	    					statusMessage.innerHTML = message.failure;
	    				}
	    	}
	    	for (let i = 0; i < input.length; i++) {
	    		input[i].value = '';
	    		// очистка инпутов
	    	}
	    });



	    // Мой ajax запрос

	    let message2 = new Object();
	    message2.loading = 'Щас пого, загружаю';
	    message2.success = 'Принял, братик, заходи';
	    message2.failure = 'Что за чушь ты отправил';

	    let form2 = document.getElementById('form');
	    let input2 = document.getElementsByTagName('input');
	    let statusMessage2 = document.createElement('p');
	    statusMessage2.style.marginTop = '20px';
	    statusMessage2.style.color = '#fea100';

	    form2.addEventListener('submit', function(e) {
	    	e.preventDefault();
	    	form2.appendChild(statusMessage2);

	    	//  My ajax
	    	let request2 = new XMLHttpRequest();
	    	request2.open('POST', 'server.php');
	    	request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	    	let formData2 = new FormData(form2);

	    	request2.send(formData2);

	    	request2.onreadystatechange = function() {
	    		if (request2.readyState < 4) {
	    			statusMessage2.innerHTML = 'Пожалуйста, подожди';
	    			} else if (request2.readyState === 4) {
	    				if (request2.status === 200 && request2.status < 300) {
	    					statusMessage2.innerHTML = 'Готово, заходи!'
	    					}
	    				} else {
	    					statusMessage2.innerHTML = 'Извини, что-то пошло не так :(';
	    					}
	    	}


	    	for (let i = 0; i < input2.length; i++) {
	    		input2[i].value = '';
	    		// очистка инпутов
	    	}



	    });

	    // slider

	    let sliderIndex = 1,
	    	 sliderItem = document.getElementsByClassName('slider-item');
	    	 prevArrow = document.querySelector('.prev'),
	    	 nextArrow = document.querySelector('.next'),
	    	 dots = document.querySelector('.slider-dots'),
	    	 dot = document.getElementsByClassName('dot');

	    	 showSlider(sliderIndex);

	    	 function showSlider(now) {
	    	 	if (now > sliderItem.length) {
	    	 		sliderIndex = 1;
	    	 	};
	    	 	if (now < 1) {
	    	 		sliderIndex = sliderItem.length;
	    	 	};
	    	 	for (let i = 0; i < sliderItem.length; i++) {
	    	 		sliderItem[i].style.display = 'none';
	    	 	};
	    	 	for (let i = 0; i < dot.length; i++) {
	    	 		dot[i].classList.remove('dot-active');
	    	 	};
	    	 	sliderItem[sliderIndex - 1].style.display = 'block';
	    	 	dot[sliderIndex - 1].classList.add('dot-active');
	    	 };

	    	 function nextSlider(now) {
	    	 	showSlider(sliderIndex += now);
	    	 };

	    	 function nowSlide(now) {
	    	 		showSlider(sliderIndex = now)
	    	 };

	    	 prevArrow.addEventListener('click', function() {
	    	 	nextSlider(-1);
	    	 });

	    	 nextArrow.addEventListener('click', function() {
	    	 	nextSlider(1);
	    	 });

	    	 dots.addEventListener('click', function(e) {
	    	 	for (let i = 0; i < dot.length + 1; i++) {
	    	 		if (e.target.classList.contains('dot') && e.target == dot[i-1]) {
	    	 			nowSlide(i);
	    	 		}
	    	 	}
	    	 });


	    	 // calculator

	    	 let people = document.getElementsByClassName('counter-block-input')[0],
	    	 	  days = document.getElementsByClassName('counter-block-input')[1],
	    	 	  place = document.getElementById('select');
	    	 	  price = document.getElementById('total');
	    	 	  peopleSum = 0,
	    	 	  daysSum = 0,
	    	 	  newPrice = 0;
	    	 	  price.innerHTML = 0;

	    	 	  people.addEventListener('change', function() {
	    	 	  	peopleSum = +this.value;
					newPrice = (daysSum + peopleSum) * 4000;
					price.innerHTML = newPrice;
					if (days.value == '') {
						price.innerHTML = 0
						} else {
							price.innerHTML = newPrice;
						}
	    	 	  });

	    	 	  days.addEventListener('change', function() {
	    	 	  	daysSum = +this.value;
	    	 	  	newPrice = (daysSum + peopleSum) * 4000;
	    	 	  	price.innerHTML = newPrice;
	    	 	  	if (people.value == '') {
	    	 	  		price.innerHTML = 0
	    	 	  		} else {
	    	 	  			price.innerHTML = newPrice;
	    	 	  		}

	    	 	  });

	    	 	  place.addEventListener('change', function() {
	    	 	  	if (days.value == '' || people.value == '') {
	    	 	  		price.innerHTML = 0
	    	 	  		} else {
	    	 	  			let ab = newPrice;
	    	 	  			price.innerHTML = ab *  this.options[this.selectedIndex].value;
	    	 	  		}
	    	 	  });






});
