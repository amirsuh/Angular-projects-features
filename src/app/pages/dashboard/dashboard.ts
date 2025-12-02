import { Component } from '@angular/core';
import { Menuconfig } from '../../core/services/menuconfig';
import { MenuItem } from '../../shared/interfaces/menus.interface';
import { CommonModule } from '@angular/common';
import { productService } from '../../core/services/product/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
promise = new Promise((resolve,reject)=>{
  let t =20;
  if(t%2===0){
    resolve("success true");
  }else{
    reject("Success false");
  }
})

observable =  new Observable<string>(res=>{
  let cnt =1230
  if(cnt%2===0){
    res.next("Success True");
  }
  else{
    res.error("Success False");
  }
})

constructor(private product:productService,private http:HttpClient){

}
ngOnInit() {
this.http.get("https://fakestoreapi.com/products")
fetch("https://fakestoreapi.com/products")
// this.getData()
}

getData(){
  fetch("https://fakestoreapi.com/products").then(res=>{
    return res.json();
  }).then(data=>{
    console.log(data);
  })
}
getpromiseData(){

  this.promise.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
this.observable.subscribe(res=>{
  console.log(res);
})
  // this.product.getdataWithFetch().then((res:any)=>res.json()).then((data:any)=>console.log(data));
Promise.allSettled([this.product.getdataWithFetch(),this.product.getdataWithFetch2()]).then(async results => {

  // Get actual JSON data if request succeeded
  let data1 = null;
  let data2 = null;

  if (results[0].status === "fulfilled" && results[0].value.ok) {
    data1 = await results[0].value.json();
  }

  if (results[1].status === "fulfilled" && results[1].value.ok) {
    data2 = await results[1].value.json();
  }

  console.log("Data 1:", data1);
  console.log("Data 2:", data2);



  // results=>{
  // console.log(results);
  //   const data1 = results[0].status === "fulfilled" ? results[0].value : null;
  // const data2 = results[1].status === "fulfilled" ? results[1].value : null;
  //  console.log("Data 1:", data1);
  // console.log("Data 2:", data2);
  // Race
  // console.log(res);
  // return res.json().then(data=>console.log(data));
  // All
  // return Promise.all(res.map(r=>r.json())).then(data=>{
  //   console.log(data);
  // });
})
//     this.menuConfigService.getMenus().subscribe(res=>{
//     });
// fetch('assets/menus-config.json')   // ❗ no leading slash
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Config file not found');
//     }
//     return response.json();
//   })
//   .then(config => {
//     console.log('Loaded config:', config);
//   })
//   .catch(err => console.error(err));
//   }
}
}
