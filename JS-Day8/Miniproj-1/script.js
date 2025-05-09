let firstname=prompt("Enter 1'st name")
let lastname=prompt("Enter Last'st name")


function genarateUsername(fi_name,la_name){
    let  str1=fi_name.slice(0,3)
    let  str2=la_name.slice(0,3)
    
    const ran=Math.floor(Math.random()*(999-100+1))+100;
    
    const result=str1.concat(str2,ran)
    return(result);
    
}
const user_name=genarateUsername(firstname,lastname)
console.log(`First Name is: ${firstname}`);
console.log(`Last Name is: ${lastname}`);

console.log(`User Name is: ${user_name}`);
