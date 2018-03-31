let money,
	shopName,
	time,
	price


//start();

let mainList = {
	buget: money,
	name: shopName,
	shopGoods: [], 
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	Goods: function Goods() {
		for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товара будем продавать?");
	
		if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else  {
			i = i - 1;
			}
		}

	},	
	workTime: function workTime(time) {
		if (time < 0) {
		console.log('Такого просто не может быть');
		} else if(time > 8 && time <20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					};
	},		
	maneyDay: function maneyDay() {
		alert("ежедневный бюджет " + mainList.buget / 30);
	},
	start: function start() {
		money = prompt("Ваш бюджет?", '');
		while (isNaN(money) || money == "" || money == null) {
		}
			shopName = prompt("Название вашего магазина?", '').toUpperCase();
			time = 21;
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	name: function name() {
		for (let i = 0; i < 4; i++) {
			let a = prompt("Имя сотрудника", '');
				if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
			mainList.employers[i] = a;
		}	else  {
			i = i - 1;
				}
			}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 5; i++) {
		let items = prompt("Перечислите через запятую ваши товары", "");
			if ((typeof(items)) === 'string' && items !== null && items != '' && items.length < 50);{
			mainList.shopItems[i] = items;
			}	/*else  {
				i = i - 1;
			}*/	{
		
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще", ""));
		mainList.shopItems.sort()
			}
		}
	}
}

Goods.shift();
alert(mainList.shopGoods[i]);
mainList.shopGoods.forEach(function(item,i,arr)) {
	console.log( i + ": " + item + ("У нас вы можете купить: " + arr + ")")
} 


mainList.forEach(function(item,i,arr)) {
	console.log( i + ": " + item + ("Наш магазин включает в себя: " + arr + ")")
}

console.log(mainList);



//maneyDay ()


//Goods();


//name ();

//console.log("ежедневный бюджет " + mainList.buget / 30);


/* 
let i = 0
while (i < 5) {
	let a = prompt("Какой тип товара будем продавать?");
	i++;
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
	mainList.shopGoods[Goods] = a;
	;
} */

/*
let i = 0
do {
	let a = prompt("Какой тип товара будем продавать?");
	i++;
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
	mainList.shopGoods[Goods] = a;
	i = i - 1;
}
while (i < 5); */ 
