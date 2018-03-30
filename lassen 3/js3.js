let money,
	shopName,
	time,
	price

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	shopName = prompt("Название вашего магазина?").toUpperCase();
	
	time = 21;

}

start();

let mainList = {
	buget: money,
	name: shopName,
	shopGoods: Goods, 
	employers: {},
	open: false,
	discount: false
}


function maneyDay(mainList.buget) {
	alert("ежедневный бюджет " + mainList.buget / 30);
}

maneyDay ()

function Goods() {
for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товара будем продавать?");

	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else  {
		i = i - 1;
		}

	}
} 
Goods();

function workTime(time) {
	if (time < 0) {
	console.log('Такого просто не может быть');
	} else if(time > 8 && time <20) {
	console.log('Время работать!');
		} else if(time < 24) {
		console.log('Уже слишком поздно!');
			} else {
			console.log('В сутках только 24 часа!');
			};
}		


function makeDiscount() {
	if (mainList.discount == true) {
		price = (price/100)*80;
	}
}

function hireEmployers() {
	for (let i = 1; i < 4; i++) {
		let name = ppprompt("Имя сотрудника");
		mainList.employers[i] = name;
	}
}

console.log(mainList);

//console.log("ежедневный бюджет " + mainList.buget / 30);


/* while (Goods < 5) {
	let a = prompt("Какой тип товара будем продавать?");
	Goods++;
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
	mainList.shopGoods[Goods] = a;
	i = i - 1;
} */

/*do {
	let a = prompt("Какой тип товара будем продавать?");
	Goods++;
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
	mainList.shopGoods[Goods] = a;
	i = i - 1;
}
while (Goods < 5); */ 
