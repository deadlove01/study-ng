import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{

  bookList: Book[] = [];

  title: string = '';
  author: string = '';

  onAddNewBook() {
    if (this.title.trim().length > 0 && this.author.trim().length > 0)
    {
      this.bookList.push({
        id: Date.now().toString(),
        title: this.title,
        author: this.author
      });

      this.title = this.author = '';

      localStorage.setItem("books", JSON.stringify(this.bookList))
    }

  }

  ngOnInit() {
    const json = localStorage.getItem("books");
    if (json)
    {
      this.bookList = JSON.parse(json);
    }
  }

  onDeleteBook(id: string){
    this.bookList = this.bookList.filter(x => x.id !== id);
    localStorage.setItem("books", JSON.stringify(this.bookList))
  }
}
