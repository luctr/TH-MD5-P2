import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../../service/book.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  id: any;

  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  }
  booksForm: FormGroup = new FormGroup({})


  constructor(public dialogRef: MatDialogRef<UpdateBookComponent>,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('id'));
    this.getByIdPet(this.id)
    this.booksForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(1),
      description: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update() {
    this.book = {
      id: this.id,
      title: this.booksForm.value.title,
      author: this.booksForm.value.author,
      description: this.booksForm.value.description,
    }
    this.bookService.updateBook(this.id,this.book).subscribe(data => {
      window.location.reload()
    })
    this.onNoClick()
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

}
