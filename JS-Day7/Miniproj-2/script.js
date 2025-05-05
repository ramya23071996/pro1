function BookLib(){
    this.book=[];
    this.addbook=function(book1){
        this.book.push(book1)
    }
    this.search=function(bookname){
       this.book=this.book.filter(function(book1){
        return book1.name===bookname;
       })
    }
}
let books=new BookLib()
books.addbook({name:"PS",author:"Kalki",year:"1960"})
books.addbook({name:"Pandiyanparisu",author:"Kalki",year:"1965"})
console.table(books.book);




console.log(books.book[0]);

