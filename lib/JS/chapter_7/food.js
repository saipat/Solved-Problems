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