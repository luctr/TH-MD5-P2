import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../model/book";
import {MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  id: any;

  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  }
  booksForm: FormGroup = new FormGroup({})


  constructor(public dialogRef: MatDialogRef<DeleteBookComponent>,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('id'));
    this.getByIdPet(this.id)
    this.booksForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(1),
      description: new FormControl('')
    })
  }
  delete(){
    this.bookService.deleteBook(this.id).subscribe(data=>{
      window.location.reload(),
        this.onNoClick()
    })
  }
  getByIdPet(id: number) {
    this.bookService.getById(id).subscribe(data => {
      this.booksForm = new FormGroup({
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      })
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
