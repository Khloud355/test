import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from '../app/books/books.component';
import {NavbarComponent} from '../app/navbar/navbar.component';
import {AdminProductComponent} from '../app/admin-product/admin-product.component';
import { ProductService } from './product.service';

const routes: Routes = [
  { path: 'admin-product', component: AdminProductComponent },
  { path: 'admin-product/:id', component: AdminProductComponent },
  { path: 'books/new', component: BooksComponent },
  { path: 'books/:id', component: BooksComponent }
  // { path: 'books', component: BooksComponent }
  // { path: '', component: AdminProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
