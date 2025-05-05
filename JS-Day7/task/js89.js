function Employee(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
}

function Manager(name, age, department, teamSize) {
    Employee.call(this, name, age, department);
    this.teamSize = teamSize;
}
const manager = new Manager('Alice', 35, 'Engineering', 10);
console.log(manager);
