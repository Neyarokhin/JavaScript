function ajax() {
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
}

module.exports = ajax;