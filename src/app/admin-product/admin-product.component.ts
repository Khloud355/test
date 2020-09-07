import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
  // import { from } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
products$;
  constructor(private ProductService:ProductService) {
this.products$ = this.ProductService.get();
console.log(this.products$,"khloud")

   }

  ngOnInit(): void {
  }

}
