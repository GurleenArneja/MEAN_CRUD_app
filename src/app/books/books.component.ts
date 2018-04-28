import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public bookList: [];
  public bookName: string;
  constructor() { }

  ngOnInit() {
    this.bookList = ["Book1","Book2","Book3"];
  }

  AddNewBook(){
    this.bookList.push(this.bookName);
  }

  delBook(index){
    this.bookList.splice(index,1);
  }
}
