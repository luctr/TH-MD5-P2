import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  book:Book={
    id:0,
    title:'',
    author:'',
    description:''
  }

  booksForm: FormGroup = new FormGroup({})

  constructor(public dialogRef: MatDialogRef<CreateBookComponent>,
              private bookService:BookService) {
  }

  ngOnInit(): void {
    this.booksForm = new FormGroup({
      title: new FormControl('',Validators.minLength(3)),
      author: new FormControl(1,Validators.minLength(3)),
      description: new FormControl('',Validators.minLength(10))
    })
  }
  create(){
    this.book.title = this.booksForm.value.title
    this.book.author = this.booksForm.value.author
    this.book.description = this.booksForm.value.description,
      this.bookService.createBook(this.book).subscribe(data =>{
        window.location.reload(),
          this.onNoClick();
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
