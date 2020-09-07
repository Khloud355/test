import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router, ActivatedRoute } from '@angular/router';


// import "rxjs/add/operator/take";
@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
username;
lastname;
age;
discription;
name;
prod;
prodd : object[] =[];


returnUser(){
  var product = {
  firstName: this.prod.value.username,
  lastName : this.prod.value.lastname,
  userAge : this.prod.value.age,
  userDis: this.prod.value.discription
 }
 this.prodd.push(product)
}
usersContainer :object[]=[]
addUser(userData){
  var khloud = {
    firstName : userData.value.username,
    lastName : userData.value.lastname,
    userAge : userData.value.age,
    userDis : userData.value.discription,

  }
  this.usersContainer.push(khloud)
 
  
}

  constructor(
    private router :Router,
    private activteRoute: ActivatedRoute,
    private ProductService :ProductService
    ){
      
      let id = this.activteRoute.snapshot.paramMap.get('id');
  if(id){
   this.ProductService.getById(id).subscribe(pro => this.prod= pro)
    console.log(id , "hh")
      console.log(this.prod, "kk")
  }
  
   
  }

    
  ngOnInit(): void {
  }

 save(product){
  this.ProductService.create(product)
  this.router.navigateByUrl('/books')
 }
   

 
}
