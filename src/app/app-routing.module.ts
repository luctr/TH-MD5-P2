import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllBookComponent} from "./book/find-all-book/find-all-book.component";

const routes: Routes = [{
  path:'',
  component:FindAllBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
