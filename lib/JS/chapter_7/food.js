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


const foo1 = { status: 'foobar' };

console.log(Object.getPrototypeOf(foo1) === Object.prototype);
console.log(foo1.constructor === Object);


function Food2(name, protein, carbs, fat) {
	this.name = name;
	this.protein = protein;
	this.carbs = carbs;
	this.fat = fat;
}
const tootsie_roll = new Food2('Tootsie Roll', 0, 26, 0);

// Object.getPrototypeOf(tootsie_roll) === Food2.prototype; // true
// tootsie_roll.constructor === Food; // true

Food2.prototype.cook = function cook () {
    console.log(`${this.name} is cooking!`);
};

const dinner = new Food2('Lamb Chops', 52, 8, 32);
dinner.cook(); // 'Lamb Chops are cooking!'


foo = {
    speak () {
    console.log('Foo!');
    }
};

const bar = Object.create(foo);

bar.speak(); // 'Foo!'
Object.getPrototypeOf(bar) === foo; // true



function Food3(name, protein, carbs, fat) {
	this.name = name;
	this.protein = protein;
	this.carbs = carbs;
	this.fat = fat;
}

Food3.prototype.toString = function() {
	return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
};

function FatFreeFood3(name, protein, carbs) {
	Food3.call(this, name, protein, carbs, 0);
}

// Setting up "subclass" relationships
// =====================
// LINE A :: Using Object.create to manually set FatFreeFood3's "parent".
FatFreeFood3.prototype = Object.create(Food3.prototype);

// LINE B :: Manually (re)setting constructor reference (!)
Object.defineProperty(FatFreeFood3.constructor, 'constructor', {
	enumerable: false,
	writeable: true,
	value: FatFreeFood3
});



// Enforcing constructor call
function Food4 (name, protein, carbs, fat) {
    // Manually call 'new' if user forgets
    if (!new.target)
        return new Food4(name, protein, carbs, fat); 

    this.name    = name;
    this.protein = protein;
    this.carbs    = carbs;
    this.fat          = fat;
}

const fish1 = Food4('Halibut', 26, 0, 2); // Oops -- but, no problem!
console.log(fish1); // 'Food4 {name: "Halibut", protein: 20, carbs: 5, fat: 0}'