import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateBookComponent} from "../update-book/update-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";
import {DetailsBookComponent} from "../details-book/details-book.component";
import {CreateBookComponent} from "../create-book/create-book.component";

@Component({
  selector: 'app-find-all-book',
  templateUrl: './find-all-book.component.html',
  styleUrls: ['./find-all-book.component.scss']
})
export class FindAllBookComponent implements OnInit {

  books:Book[] =[]

  constructor(private bookService: BookService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getALLBook()
  }
  getALLBook(){
    this.bookService.getAll().subscribe((data:Book[])=>{
      this.books  = data;
    })
  }
  openDialogUpdate(id:any){
    this.dialog.open(UpdateBookComponent);
    this.id(String(id))
  }
  openDialogDelete(id:any){
    this.dialog.open(DeleteBookComponent);
    this.id(String(id))
    console.log(id)
  }
  openDialogDetails(id:any){
    this.dialog.open(DetailsBookComponent);
    this.id(String(id))
  }
  openDialogCreate(){
    this.dialog.open(CreateBookComponent)
  }

  id(id:any){
    localStorage.setItem('id',id)
  }

}
