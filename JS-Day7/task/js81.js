function Car(brand, model,year) { 
    this.brand = brand; 
    this.model = model; 
    this.year = 2010;
    this.displayInfo = function() { 
        return `${this.brand} ${this.model} ${this.year}`; 
    }; 
    this.carage=function(){
    
        return(`The car age is ${2025-this.year} years`)
    }
} 
 
let myCar = new Car("Tesla", "Model X",2010); 
console.log(myCar.displayInfo());