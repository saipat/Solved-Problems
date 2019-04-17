class Person{
    constructor(gender){
        this.gender = gender;
    }

    sayGender(){
        console.log(this.gender);
        return 1;
    }
}

var person1 = new Person('Male');
var genderTeller = person1.sayGender;


console.log(person1.sayGender());

console.log(genderTeller());


console.log(genderTeller.call(person1));

