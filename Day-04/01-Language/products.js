var products = [
	{id : 4, name : "Pen", cost : 30, units :70, category:1},
	{id : 8, name : "Hen", cost : 90, units :80, category:2},
	{id : 5, name : "Ten", cost : 60, units :50, category:1},
	{id : 9, name : "Len", cost : 80, units :90, category:2},
	{id : 6, name : "Den", cost : 40, units :60, category:1}
];

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
];

console.log("Default list");
console.table(products);

var sort = function(){
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++)
			if (products[i].id > products[j].id){
				var temp = products[i];
				products[i] = products[j];
				products[j] = temp;
			}
}

console.log("After sorting");
sort();
console.table(products);

var sort = function(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

console.log("After sorting [cost]");
sort(products,"cost");
console.table(products);

console.log("After sorting [units]");
sort(products,"units");
console.table(products);

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (comparerFn(list[i], list[j]) > 0 ){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

var productComparerByValue = function(p1,p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;
	if (p1Value < p2Value) return -1;
	if (p1Value === p2Value) return 0;
	return 1;
}

console.log("After sorting [product value]");
sort(products,productComparerByValue);
console.table(products);