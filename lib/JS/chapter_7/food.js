// https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes
// Food is a base class
class Food {
	constructor(name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}

	toString() {
		return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
	}

	print() {
		console.log(this.toString());
	}
}

// FatFreeFood is a derived class
class FatFreeFood extends Food {

    constructor (name, protein, carbs) {
        super(name, protein, carbs, 0);
    }

    print () {
        super.print(); 
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

// test for base class
const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // 26 (LINE A)

// test for child class
const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print(); // 'Greek Yogurt | 26g P :: 16g C :: 0g F  /  Would you look at that -- Greek Yogurt has no fat!'


// Eliminating the need for 'new' -- just for demonstration
function Food1 (name, protein, carbs, fat) {
    // Step One: Create a new Object
    const obj = { }; 

    // Step Two: Link prototypes
    Object.setPrototypeOf(obj, Food1.prototype);

    // Step Three: Set 'this' to point to our new Object
    //    Since we can't reset `this` inside of a running execution context, 
    //      we simulate Step Three by using 'obj' instead of 'this'
    obj.name    = name;
    obj.protein = protein;
    obj.carbs    = carbs;
    obj.fat         = fat;

    // Step Four: Return the newly created object
    return obj;
}

const fish = Food1('Halibut', 26, 0, 2);
console.log(`\n`);
console.log(fish);

console.log(fish.protein); // 26


console.log(typeof new Object());
console.log(typeof Object());



function foo() {
	console.log('Foo!');
}

console.log(foo.prototype);
console.log(foo.prototype.constructor);
console.log(foo.prototype.constructor());
