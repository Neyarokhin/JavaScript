window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}

	}		

	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer

let deadline = '2018-04-18';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.inerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			};

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);

	// Modal

	let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	}); 
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let scription_btn = document.querySelectorAll('.description-btn');



	scription_btn: function btn () {
		for (let i = 0; i < scription_btn.length; i++) {
		scription_btn[i].addEventListener('click', showModal);
	};
		};
 		

 	function showModal() {

       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden';

   };

scription_btn[0].addEventListener('click', showModal);
scription_btn[1].addEventListener('click', showModal);
scription_btn[2].addEventListener('click', showModal);
scription_btn[3].addEventListener('click', showModal);

//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMassage = document.createElement('div');
		statusMassage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMassage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMassage.innerHTML = message.loading;	
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMassage.innerHTML = message.success;
						//Добавляем контент на страницу
					}
					else {
						statusMassage.innerHTML = message.failure;
					}
				}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				//Очищаем поля ввода
			}
		});

		let newForm = document.getElementById('form'),
			newInput = newForm.getElementsByTagName('input');


			newForm.addEventListener('submit', function(event) {
			event.preventDefault();
			newForm.appendChild(statusMassage);

			//AJAX
			let newRequest = new XMLHttpRequest();
			newRequest.open("POST", 'server.php');

			newRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(newForm);

			newRequest.send(formData);

			newRequest.onreadystatechange = function() {
				if (newRequest.readyState < 4) {
					statusMassage.innerHTML = message.loading;	
				} else if (newRequest.readyState === 4) {
					if (newRequest.status == 200 && newRequest.status < 300) {
						statusMassage.innerHTML = message.success;
						//Добавляем контент на страницу
					}
					else {
						statusMassage.innerHTML = message.failure;
					}
				}
			}
			for (let i = 0; i < newInput.length; i++) {
				newInput[i].value = '';
			}
		});

	//Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			}

			if (n < 1) {
				slideIndex = slides.length;
			}; 

			for ( let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}

			for  ( let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');

		}

		function plusSliders (n) {
			showSlides(slideIndex += n)
		}

		function currenSlide(n) {
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function() {
			plusSliders(-1);
		});

		next.addEventListener('click', function() {
		plusSliders(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for ( let i= 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currenSlide(i);
				}
			}
		});

		//Calc

		 let persons = document.getElementsByClassName('counter-block-input')[0],
		        restDays = document.getElementsByClassName('counter-block-input')[1],
		        place = document.getElementById('select'),
		        totalValue = document.getElementById('total'),
		        personsSum = 0,
		        daysSum = 0,
		        total = 0;
		    totalValue.innerHTML = 0;
		    persons.addEventListener('change', function() {
		        personsSum = parseInt(this.value);
		        this.value = personsSum;
		        total = (daysSum + personsSum)*4000;
		        if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
		            totalValue.innerHTML = 0;
		        } else {
		            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		        }
		    });
		    restDays.addEventListener('change', function() {
		        daysSum = parseInt(this.value);
		        this.value = daysSum;
		        total = (daysSum + personsSum)*4000;
		        if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
		            totalValue.innerHTML = 0;
		        } else {
		            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		        }
		    });
		    place.addEventListener('change', function() {
		        if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
		            totalValue.innerHTML = 0;
		        } else {
		            let a = total;
		            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		        }
		    });


});

	

