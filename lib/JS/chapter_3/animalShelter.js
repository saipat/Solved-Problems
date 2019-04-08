// An Animal shelter, which holds only dogs and cats, operate strictly on a FIFO basis. People must either adopt the 'oldest' (based on arrival time) of all animals of the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeueCat. You may use the build-in LinkedList data structure.

// Implement queue using linked list.
// Create a node class with value and next.
// Create a linked list class with head and tail.
// To enqueue, check to make sure head and tails are not null. if it is, assign the node to add to them.
// if the tails is not null, assign the node to add to the tails's next.
// To dequeue, check if the head is not null, if it is throw an err. if it is not , use a temp variable to store the front and change the front's next to the node to add and return the temp.
// to peek return the head.
// to print, iterate th' the list and console log the current.

// Create a AnimalShelter class with 2 lists eack for dogs and cats.
// Create a Node class for dogs and cats separately with value and the date.
// Implement the function for enqueue animal - First check if the given animal is an instance of dog or cat. then enqueue it.
// For dequeueDog and dequeueCat, same like we did it for dequque using linkedList.


class AnimalShelter{
    constructor(){
        this.dogList = new Queue();
        this.catList = new Queue();
    }

    enqueueAnimal(animal){
        if(animal instanceof Dog){
            this.dogList.enqueue(animal);
        }else if(animal instanceof Cat){
            this.catList.enqueue(animal)
        }else{
            throw new Error(`There is no list for ${animal}.`);
        }
    }

    dequqeDog(){
        if(!this.dogList.front){
            throw new Error('There is no dog to get');
        }
        // console.log(this.dogList.front);
        return this.dogList.dequeue();
    }

    dequqeCat(){
        if(!this.catList.front){
            throw new Error('There is no dog to get');
        }
        // console.log(this.catList.front);
        return this.catList.dequeue();
    }



    dequqeAny(){
        let firstDog = this.dogList.peek();
        let firstCat = this.catList.peek();

        // console.log(firstCat.value.date.getTime());

        if(firstCat && firstDog){
            if (firstCat.value.date.getTime() < firstDog.value.date.getTime()){
                return this.dequqeCat();
            }else{
                return this.dequqeDog();
            }
        }else if(firstCat){
            return this.dequqeCat();
        }else if(firstDog){
            return this.dequqeDog();
        }else{
            throw new Error('There is no cat or dog to adopt');
        }
    }
}

class Dog{
    constructor(value){
        this.dogs = new Node(value);
        this.date = new Date();
    }
}

class Cat{
    constructor(value) {
        this.cats = new Node(value);
        this.date = new Date();
    }   
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



// test
const Queue = require('./queueImplementation'); 
let  q = new Queue();
console.log(new Node('cat'));
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

let dogs = new Dog('Tommy');
console.log(dogs);

let cats = new Cat('Garfield');
console.log(cats);

let animal = new AnimalShelter();
animal.enqueueAnimal(dogs);
animal.enqueueAnimal(new Dog('James'));
animal.enqueueAnimal(new Dog('Peet'));
animal.enqueueAnimal(cats);
animal.enqueueAnimal(new Cat('Orange'));
animal.enqueueAnimal(new Cat('Bottle'));
console.log(animal);

console.log(animal.dequqeDog());
console.log(animal.dequqeDog());

console.log(animal.dequqeCat());
console.log(animal.dequqeCat());

console.log(animal.dequqeAny());




