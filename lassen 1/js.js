var buget1 = prompt("Ваш бюджет?", 9999999);
var name1 = prompt("Название вашего магазина?");
var Goods = [];

mainList = {
	buget: buget1,
	name: name1,
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