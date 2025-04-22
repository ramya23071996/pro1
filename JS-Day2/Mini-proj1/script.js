const citizen="indian"
const age = 25

console.log("Citizen:",citizen)
console.log("Candidate Age:",age)
let chk=(citizen==="indian") && (age>=18) ? "Eligible For vote" : "Not Eligible for Vote"
console.log(chk)