

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { environment } from 'src/environments/environment';
import { BooksComponent } from './books/books.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AdminProductComponent,
    NavbarComponent, 
  ],
  
  exports: [
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.fire),
    AngularFireDatabaseModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
