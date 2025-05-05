function Book(tit,aut,pri){
    this.title=tit;
    this.author=aut;
    this.price=pri;
    this.filter=function(){
        if(pri>1000){
            console.log(`Book Name:${this.title}`);
            console.log(`Author Name:${this.author}`);
            console.log(`Book Price:${this.price}`);
            
        }
    }
}

var book1=new Book("PS","Kalki",1500)
var book2=new Book("JavaScript","M.K",800)

console.log(`Above Book Price is 1000:`);
book1.filter()
book2.filter()

