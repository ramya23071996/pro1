var sub1=Number(prompt("Enter Subject1"))
var sub2=Number(prompt("Enter Subject2"))
var sub3=Number(prompt("Enter Subject3"))
// var tot
var avg
var grade

function stumarks(a,b,c){
     tot=a+b+c;
     avg=tot/3;

    if(avg>=90){
        grade=" A"
        return grade;
     }   
     else if(avg>=75 && avg<90){
        grade=" B"
        return grade;
     }
     else if(avg>=50 && avg<=74){
        grade=" C"
        return grade;
     }
     else{
        grade="Fail"
        return grade;
     }
     return tot,avg
    


}
stumarks(sub1,sub2,sub3)
console.log("Total:",tot)
console.log("Average:",avg);
console.log("Grade",grade);