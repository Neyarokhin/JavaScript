var money = prompt("Ваш бюджет?", 9999999);
var shopName = prompt("Название вашего магазина?");
var Goods = [];

mainList = {
	buget: money,
	name: shopName,
	shopGoods: Goods, 
	employers: {},
	open: true
}


mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?");

console.log(mainList);

console.log("ежедневный бюджет " + mainList.buget/30);

/*
Goods[0] = prompt("Какой тип товара будем продавать?");
Goods[1] = prompt("Какой тип товара будем продавать?");
Goods[2] = prompt("Какой тип товара будем продавать?");

*/





let money = prompt("Ваш бюджет?", 9999999);
let shopName = prompt("Название вашего магазина?");
let Goods = [];
let time = 19;

let mainList = {
	buget: money,
	name: shopName,
	shopGoods: Goods, 
	employers: {},
	open: true
}

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товара будем продавать?");

	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else  

}

whille (time > 8 && time < 20) {
	console.log('Время работать!');
}
console.log("ежедневный бюджет " + mainList.buget / 30);

console.log(mainList);

/*if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time <20) {
	console.log('Время работать!');
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		};



/*
Goods[0] = prompt("Какой тип товара будем продавать?");
Goods[1] = prompt("Какой тип товара будем продавать?");
Goods[2] = prompt("Какой тип товара будем продавать?");

*/