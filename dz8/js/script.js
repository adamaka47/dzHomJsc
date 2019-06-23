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

});
