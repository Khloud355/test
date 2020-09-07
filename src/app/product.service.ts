import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private db: AngularFireDatabase) { }
  create(product){
this.db.list('/khloud').push(product)
  }

  get(){
    return this.db.list('/khloud').snapshotChanges()
  }
  getById(productId){
    return this.db.list('/khloud' + productId).valueChanges();
  }

}
