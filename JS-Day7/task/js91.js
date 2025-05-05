function Person(name, age) {
    this.name = name;
    this.age = age;
}


function createPerson(name, age) {
    return new Person(name, age);
}


const person = createPerson('John', 20);

console.log(person.name); 
console.log(person.age);
console.log(person);
