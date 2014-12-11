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

function sort(){
	//fill in the blanks
}

console.log("After sorting");
sort();
console.table(products);