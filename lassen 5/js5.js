let btnOpen = document.getElementById("open-btn"),
	name = document.getElementsByClassName("name-value")[0],
	buget = document.getElementsByClassName("budget-value")[0],
	goods = document.getElementsByClassName("goods-value")[0],
	items = document.getElementsByClassName("items-value")[0],
	employers = document.getElementsByClassName("employers-value"[0]),
	discount = document.getElementsByClassName("discount-value")[0],
	isopen = document.getElementsByClassName("isopen-value")[0],
	shopGoods = document.getElementsByClassName("goods-item"),
	goods_btn = document.getElementsByTagName("button")[1],
	budget_btn = document.getElementsByTagName("button")[2],
	employers_btn = document.getElementsByTagName("button")[3],
	chooseItem = document.querySelector(".choose-item"),
	timeValue = document.querySelector(".time-value"),
	countBudget = document.querySelector(".count-budget-value"),
	hEI = document.querySelectorAll(".hire-employers-item");


let money,
	shopName,
	time,
	price;



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
		//Goods.shift();

		//alert(mainList.shopGoods[i]);
			

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
			money = prompt("Ваш бюджет?", '');
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
		 
			let items = prompt("Перечислите через запятую ваши товары", "");
			while (typeof(items) !== 'string' || items == "" || items == null) {
			items = prompt("Перечислите через запятую ваши товары", '');
		}
			
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще", ""));
		mainList.shopItems.sort()
	}
}

console.log("У нас вы можете купить: ");
mainList.shopItems.forEach(function (item,i,arr) {
	console.log((i + 1) + ": " + item);
});


console.log("Наш магазин включает в себя: ");
for (let prop in mainList) {
	console.log(prop);
	};

//let answer = prompt("Как Вы относитесь к технике apple?","");
//let main = document.querySelector('.main-info');
let main = document.getElementsByClassName('main-info')
main.innerHTML = mainList.start;


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
