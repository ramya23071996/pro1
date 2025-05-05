
function Employee(name,posi,sal){
    this.emp=[
        this.name=name,
        this.position=posi,
        this.salary=sal
        
    ]
    this.increment=function(amt){
       return(this.salary+amt)
   
    }
  
}
let emp1=new Employee("Arun","Teamleader",20000)
let incre=emp1.increment(2000)
let emp2=new Employee("Balu","HR",25000)
let incre2=emp2.increment(3000)

console.table(emp1);
console.log(`Salary Increment:${incre}`);
console.table(emp2);
console.log(`Salary Increment:${incre2}`);



