let menuItem = document.querySelector('.menu-item'),
	menu = document.querySelector('.menu'),
	menuItem5 = document.createElement('li'),
	adv = document.querySelector('.adv'),
	body = document.querySelector('body'),
	Apple = document.querySelector('.title'),
	column = document.getElementsByClassName('column'),
	qwest = document.querySelector('.prompt'),
	menuItem1 = document.querySelectorAll('.menu-item');
	//menuItem1 = document.getElementsByClassName('menu-item');


menuItem5.classList.add('menu-item');
menu.appendChild(menuItem5, menuItem[3]);
body.style.backgroundImage = 'url(img/apple_true.jpg)';
document.querySelector('.adv').remove();
let answer = prompt("Как Вы относитесь к технике apple?","");
menuItem5.innerHTML = 'Пятый пункт';
Apple.innerHTML = ' Мы продаем только подлинную технику Apple';
qwest.innerHTML ='Вы относитесь к технике apple:' + answer;
menuItem1[1].innerHTML = 'Второй пункт';
menuItem1[2].innerHTML = 'Третий пункт';
//menuItem1.appendChild(menuItem1[2], menuItem1[1]);
//document.querySelectorAll(menuItem1[1]).remove();
//document.body.insertBefore(menuItem1[2], menuItem1[1]);

console.log(menuItem1[1]);
