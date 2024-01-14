var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);


// or
// assign the property to a variable before logging it
var productPrice = product.price;
console.log(productPrice);



var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].colour);
}

// or
// assign the length of the array to a variable and then use the variable in the for loop
var animalCount = animals.length;

for (var i = 0; i < animalCount; i++) {
    // assign the property to a variable before logging it
    var animalColour = animals[i].colour;
    console.log(animalColour);
}



var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];


for (var i = 0; i < dinnerOptions.length; i++){
    // check if onSpecial is true
    // shorthand for if (dinnerOptions[i].onSpecial === true)
    if (dinnerOptions[i].onSpecial) {
        console.log(dinnerOptions[i].name);
    }

}

//or 
for (var i = 0; i < dinnerOptions.length; i++) {

    // assign the properties to variables
    var isOnSpecial = dinnerOptions[i].onSpecial;
    var productName = dinnerOptions[i].name;

    if (isOnSpecial === true) {
        console.log(productName);
    }
}



var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];


for (var i = 0; i < people.length; i++) {
    var age= people[i].age;
    var fullName = people[i].firstName + " " + people[i].lastName;

    if (age >= 20 && age <= 50){
        console.log(fullName);
    }
}




var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];


var productsContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    var item = products[i];

    productsContainer.innerHTML += "<li>" + item.name + " - " + item.price + "</li>";
}


//or

for (var i = 0; i < products.length; i++) {
    var details = products[i].name + " - " + products[i].price;
    productsContainer.innerHTML = productsContainer.innerHTML + "<li>" + details + "</li>";
}