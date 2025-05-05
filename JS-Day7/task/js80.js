function Persons(name, age) { 
    this.name = name; 
    this.age = age; 
    this.greeting=function(){
        return('Welcome to java Script Class '+this.name)
    }
return
}
let pers1 = new Persons("Arun",25); 

console.log(pers1.name);
console.log(pers1.age);
console.log(pers1.greeting());