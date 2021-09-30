import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { CreateBookComponent } from './book/create-book/create-book.component';
import { DetailsBookComponent } from './book/details-book/details-book.component';
import { FindAllBookComponent } from './book/find-all-book/find-all-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DetailsBookComponent,
    FindAllBookComponent,
    UpdateBookComponent,
    DeleteBookComponent
  ],
  entryComponents:[CreateBookComponent,UpdateBookComponent,DeleteBookComponent,DetailsBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
