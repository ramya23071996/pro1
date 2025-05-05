function studentArray(gr1,gr2,gr3){
    this.grade1=gr1;
    this.grade2=gr2;
    this.grade3=gr3;
      this.avg=function(){
       
       let tot=gr1+gr2+gr3;
       this.total=tot
       return(tot/3);
               
    }
}

let stu=new studentArray(50,70,65)
console.log(`Mark1:${stu.grade1}`);
console.log(`Mark2:${stu.grade2}`);
console.log(`Mark3:${stu.grade3}`);

let average=stu.avg()
console.log(`Total:${stu.total}`);
console.log(`Average:${average}`);



