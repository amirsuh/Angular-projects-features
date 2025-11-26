import { Component } from '@angular/core';
import { Hotelroom } from "./hotelroom/hotelroom";
export interface HotelDetail{
  name:string,
  city:string,
  roomType:string,
  price:string,
  discount:string
}
@Component({
  selector: 'app-overview',
  imports: [Hotelroom],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
hotelOptions: HotelDetail[] = []
constructor(){
  this.hotelOptions=[{
      name: 'Hilton',
      city: 'Florida',
      roomType: 'Single',
      price: '50$ per night',
      discount: '25%'
    },
    {
      name: 'Hilton',
      city: 'Florida',
      roomType: 'Double',
      price: '125$ per night',
      discount: '35%'
    },
    {
      name: 'Marriot',
      city: 'Florida',
      roomType: 'Single',
      price: '100$ per night',
      discount: '20%'
    },
    {
      name: 'Homewood Suites',
      city: 'Florida',
      roomType: 'Double',
      price: '300$ per night',
      discount: '30%'
    },
    {
      name: 'Country Inn',
      city: 'Seattle',
      roomType: 'Single',
      price: '100$ per night',
      discount: '20%'
    },
    {
      name: 'Hyatt',
      city: 'Seattle',
      roomType: 'Double',
      price: '500$ per night',
      discount: '20%'
    },
    {
      name: 'Crowne Plaza',
      city: 'New York',
      roomType: 'Double',
      price: '300$ per night',
      discount: '10%'
    },
    {
      name: 'Embassy Suites',
      city: 'New York',
      roomType: 'Triple',
      price: '700$ per night',
      discount: '40%'
    }];
}
}
