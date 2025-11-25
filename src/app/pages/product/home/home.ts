import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productService } from '../../../core/services/product/product';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
  productList:any
  constructor(private productservice:productService){

  }
  ngOnInit(){
   this.productservice.getProductList().subscribe(res=>{
    this.productList = res
   })
  }
}
