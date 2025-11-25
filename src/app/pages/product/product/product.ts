import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { productService } from '../../../core/services/product/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {

  productDetail? : any;
  private routeSub: Subscription;
  currentId!:string

  constructor(private route : ActivatedRoute,private productService : productService){
    this.routeSub = this.route.params.subscribe(params => {
      this.currentId = params['id'];
      // Now you can call your function to get data with the new ID
      this.getData(this.currentId);
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    let productId = id ? id:this.currentId;
     console.log(productId,id)
    this.getProductDetailById(productId)
  }

  getProductDetailById(id: number){
    this.productService.getProductDetailById(id).subscribe(res => {
      this.productDetail = res
      console.log(res)
    })
  }

  getData(id: string): void {
    console.log('Fetching data for ID:', id);
    // Your data fetching logic here
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.routeSub.unsubscribe();
  }
}
